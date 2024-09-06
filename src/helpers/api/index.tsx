class HttpClient {
  private _baseURL: string;
  private _headers: Record<string, string>;

  constructor(options: { baseURL?: string; headers?: Record<string, string> } = {}) {
    this._baseURL = options.baseURL || "https://test.ramanacastle.com/api/";
    this._headers = options.headers || {};
    if (typeof window !== "undefined") {
      this._headers.Authorization = "Bearer " + localStorage.getItem("agent");
    }
  }

  private static instance: HttpClient;

  static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient({
        headers: {
          "Content-Type": "application/json",
        },
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

  private async _fetchJSON(endpoint: string, options: RequestInit = {}) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers,
    });

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error('Unauthorized: Please login again.');
      } else {
        throw new Error('Request failed with status ' + res.status);
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

    // Do not set the Content-Type header manually for FormData
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

export const file_url = "https://test.ramanacastle.com";
export const admin_file = "https://testadmin.ramanacastle.com";
