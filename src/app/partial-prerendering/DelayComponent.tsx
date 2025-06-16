const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function DelayComponent() {
  await wait(2000); // simulate a 2-second delay
  return <p>This component was delayed by 2 seconds.</p>;
}
