import axios from "axios";
export const SERVER_URL = "http://localhost:8000";
let cancelToken = axios.CancelToken;
let source = cancelToken.source();
export const axiosRequestHandler = async (
    url,
    method,
    body,
    type = null,
    isFileUpload = false
) => {
    try {
        if (type === "CANCEL_API_REQUEST") {
            source.cancel("Operation canceled by the user.");
            let CancelToken = axios.CancelToken;
            source = CancelToken.source();
        }
        const headers = {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        };
        headers["Content-Type"] = isFileUpload
            ? "multipart/form-data;"
            : "application/json";

        const accessToken = localStorage.getItem("jwtToken");
        if (accessToken && accessToken !== "undefined") {
            headers["authorization"] = `Bearer ${accessToken}`;
        }
        const result = await axios({
            url: `${SERVER_URL}${url}`,
            defaults: {
                timeout: 20000,
            },
            data: body,
            headers: headers,
            method: method,
            cancelToken: source.token,
        });

        return {
            error: null,
            success: true,
            data: result.data,
        };
    } catch (error) {
        return {
            error,
            success: false,
        };
    }
};
