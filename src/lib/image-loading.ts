type ImageLoadingOptions = {
  priority?: boolean;
};

export function getImageLoadingProps({
  priority = false,
}: ImageLoadingOptions = {}) {
  if (priority) {
    return {
      priority: true as const,
      loading: "eager" as const,
      fetchPriority: "high" as const,
    };
  }

  return {
    loading: "lazy" as const,
    fetchPriority: "low" as const,
  };
}
