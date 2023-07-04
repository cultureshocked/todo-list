export default function Button({ handler, children, className }) {
  return (
    <button className={className} onClick={handler}>
      {children}
    </button>
  );
}
