import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const userAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLoggingin: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("auth/check");

      set({ authUser: res.data });
    } catch (error) {
      console.error("Error in checkAuth:", error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
