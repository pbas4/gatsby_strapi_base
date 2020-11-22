import useAdaptive from '../../../utils/useAdaptive';

export function ExampleComponent() {
  const device = useAdaptive({
    '4k': { width: 3840, height: 2160 },
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 768, height: 834 },
    mobile: {},
  });
  return device === '4k' ? 'whow that\'s big' : device;
}
