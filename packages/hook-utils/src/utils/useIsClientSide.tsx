const useIsClientSide = () => {
  return typeof window !== "undefined";
};

export default useIsClientSide;
