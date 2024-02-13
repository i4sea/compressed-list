class HttpClient {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async makeRequest(path: string, options: RequestInit): Promise<any> {
    const headers = new Headers();

    console.log(path, options);

    if (options.body) {
      headers.append("Content-Type", "application/json");
    }

    if (options.headers) {
      Object.entries(options.headers).forEach((header) =>
        headers.append(header[0], header[1])
      );
    }

    // real request construction

    // const response = await fetch(`${this.baseUrl}${path}`, {
    //   method: options.method,
    //   body: JSON.stringify(options.body),
    //   headers,
    // });
    // let responseBody = null;

    // const contentType = response.headers.get("Content-Type");

    // if (contentType?.includes("application/json")) {
    //   responseBody = await response.json();
    // }

    // if (!response.ok) {
    //   const error = new Error();
    //   error["name"] = responseBody?.error?.name || "Erro desconhecido";
    //   error["message"] = responseBody?.error?.message || "Erro desconhecido";
    //   throw error;
    // }

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    return true;
  }

  get(path: string, options: RequestInit) {
    return this.makeRequest(path, {
      method: "GET",
      headers: options?.headers,
    });
  }
  post(path: string, options: RequestInit) {
    return this.makeRequest(path, {
      method: "POST",
      body: options?.body,
      headers: options?.headers,
    });
  }
  put(path: string, options: RequestInit) {
    return this.makeRequest(path, {
      method: "PUT",
      body: options?.body,
      headers: options?.headers,
    });
  }
  patch(path: string, options: RequestInit) {
    return this.makeRequest(path, {
      method: "PATCH",
      body: options?.body,
      headers: options?.headers,
    });
  }
  delete(path: string, options: RequestInit) {
    return this.makeRequest(path, {
      method: "DELETE",
      headers: options?.headers,
    });
  }
}

export default HttpClient;
