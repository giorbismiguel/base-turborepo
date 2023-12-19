export type FormHookType = {
  control: any;
  error: any;
  isLoading: boolean;
  isSuccess?: boolean;
  reset?: () => void;
  data?: any;
  onSubmit: (data: any) => Promise<any> | any;
};
