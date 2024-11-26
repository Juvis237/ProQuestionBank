/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
const nextConfig = {};

const nextPWAConfig = {
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
};

const configWithPWA = withPWA(nextPWAConfig);

export default {
  ...nextConfig,
  ...configWithPWA,
};
