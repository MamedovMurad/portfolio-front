

class HttpClient {
    _baseURL: string;
    _headers: any;
    constructor(options: any = {}) {

      this._baseURL = options.baseURL || "https://test.ramanacastle.com/api/";
      this._headers = options.headers || {};
      if (typeof window !== "undefined") {
        options.headers.Authorization = "Bearer " + localStorage.getItem("agent");
       
      }
    }
  
    private static instance: HttpClient;
  
    static getInstance() {
      if (!HttpClient.instance) {
        HttpClient.instance = new HttpClient({
          headers: {
            ["content-type"]: "application/json",
         
          },
        });
      }
  
      return HttpClient.instance;
    }
  
    setHeader(key: string, value: string) {
      this._headers[key] = value;
      if (value === "") {
        delete this._headers[key];
      }
      return this;
    }
  
    async _fetchJSON(endpoint: string, options: any = {}) {
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
  
      if (options.parseResponse !== false && res.status !== 204)
        return res.json();
  
      return undefined;
    }
  
    get(endpoint: string, options = {}) {
      return this._fetchJSON(endpoint, {
        ...options,
        method: "GET",
      });
    }
  
    post(endpoint: string, body: any, options = {}) {
      return this._fetchJSON(endpoint, {
        ...options,
        body: JSON.stringify(body),
        method: "POST",
      });
    }
    put(endpoint: string, body: any, options = {}) {
      return this._fetchJSON(endpoint, {
        ...options,
        body: JSON.stringify(body),
        method: "PUT",
      });
    }

    postWithFormData(endpoint: string, body: any) {
      const formData = new FormData();
      for (const k in body) {
        formData.append(k, body[k]);
      }

this.setHeader('content-type',"multipart/form-data")
      return  fetch(this._baseURL + endpoint, {
        headers: {Authorization :"Bearer " + localStorage.getItem("agent")},
        method: "POST",
        body: formData,
      });
    }




    delete(endpoint: string, options = {}) {
      return this._fetchJSON(endpoint, {
        parseResponse: false,
        ...options,
        method: "DELETE",
      });
    }
  }
  
  export const api = HttpClient.getInstance();

  export const file_url = "https://test.ramanacastle.com"