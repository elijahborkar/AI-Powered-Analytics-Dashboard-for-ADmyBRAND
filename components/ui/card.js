export function Card({ children, className }) {
  return (
    <div className={`rounded-xl border bg-white dark:bg-gray-800 shadow ${className || ""}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
