export type UnsubscribeResult = 'ok' | 'inactive' | 'fail';

export const unsubscribe = async (token: string): Promise<UnsubscribeResult> => {
  const response = await fetch('https://api.skrybe.co/esl/subscription', {
    body: token,
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    },
    method: 'DELETE'
  });

  switch (response.status) {
    case 204:
      return 'ok';
    case 404:
      return 'inactive';
    default:
      return 'fail';
  }
}
