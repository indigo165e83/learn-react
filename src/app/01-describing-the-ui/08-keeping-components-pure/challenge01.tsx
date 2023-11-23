export default function Challenge01() {
  const time = new Date()
  let hours = time.getHours();
  let className = "";
  if (hours >= 0 && hours <= 6) {
    className = "night"
  } else {
    className = "day"
  }
  return (
    <h1 id={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}