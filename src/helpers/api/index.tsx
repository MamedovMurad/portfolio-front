class HttpClient {
  private _baseURL: string;
  private _headers: Record<string, string>;
  private _language: string; // Add a language property

  constructor(options: { baseURL?: string; headers?: Record<string, string>; language?: string } = {}) {
    this._baseURL = options.baseURL || "https://biharbor-api.honeybal.net/";
    this._headers = options.headers || {};
    this._language = localStorage.getItem('lang') || 'az';// Default to English if no language is set
    
    if (typeof window !== "undefined") {
      this._headers.Authorization = "Bearer " + localStorage.getItem("agent");
    }

    // Set the Accept-Language header with the initial language value
    this._headers["Accept-Language"] = this._language;
  }

  private static instance: HttpClient;

  static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient({
        headers: {
          "Content-Type": "application/json",
        },
        language: "en", // You can set a default language here if needed
      });
    }

    return HttpClient.instance;
  }

  setHeader(key: string, value: string) {
    if (value === "") {
      delete this._headers[key];
    } else {
      this._headers[key] = value;
    }
    return this;
  }

  // Method to set language dynamically
  setLanguage(lang: string) {
    this._language = lang;
    this.setHeader("Accept-Language", lang); // Update the Accept-Language header
    return this;
  }

  private async _fetchJSON(endpoint: string, options: RequestInit = {}) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers,
    });

    if (!res.ok) {
      if (res.status === 401) {
        localStorage.clear();
        window.location.href = "/";
        throw new Error("Unauthorized: Please login again.");
      } else {
        throw new Error("Request failed with status " + res.status);
      }
    }

    if (options.method !== "GET" && res.status === 204) {
      return undefined;
    }

    return res.json();
  }

  get(endpoint: string, options: RequestInit = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: "GET",
    });
  }

  post(endpoint: string, body: any, options: RequestInit = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: JSON.stringify(body),
      method: "POST",
    });
  }

  put(endpoint: string, body: any, options: RequestInit = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: JSON.stringify(body),
      method: "PUT",
    });
  }

  postWithFormData(endpoint: string, body: Record<string, any>) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(body)) {
      formData.append(key, value);
    }

    return fetch(this._baseURL + endpoint, {
      headers: { Authorization: "Bearer " + localStorage.getItem("agent") },
      method: "POST",
      body: formData,
    });
  }

  delete(endpoint: string, options: RequestInit = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: "DELETE",
    });
  }
}

export const api = HttpClient.getInstance();
export const file_url = "https://biharbor-api.honeybal.net";
export const admin_file = "https://www.testadmin.ramanacastle.com/admin";
