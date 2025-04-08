
interface ConvertKitAPI {
  loadForm: () => void;
  [key: string]: any;
}

declare global {
  interface Window {
    ck?: ConvertKitAPI;
  }
}

export {};
