export default function Loader({ size = 24, message = "Loading...", className = "" }) {
return (
<div className={`flex flex-col items-center justify-center p-4 ${className}`}>
<div className="radial-progress" style={{ width: size, height: size }}></div>
{message && <span className="mt-2 text-sm">{message}</span>}
</div>
);
}