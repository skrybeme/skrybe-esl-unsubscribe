export const getToken = () => {
    const segments = window.location.pathname.split('/');

    return segments[segments.length - 1];
}
