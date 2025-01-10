export function addClass(...props: unknown[]) {
    return props.filter(Boolean).join(' ');
}
