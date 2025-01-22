import axios from "axios";

export const verifyGoogleToken = async (idToken: string) => {
    try {
        const response = await axios.post("/api/auth/google", {idToken});
        console.log("User info:", response.data);
    } catch (error) {
        console.error("Failed to verify Google token:", error);
    }
};
