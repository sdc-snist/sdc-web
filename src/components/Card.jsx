
function Card(props) {
  return (
    <div className="card flex flex-col items-center justify-center max-w-sm mx-auto p-7 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
      <img
        src={props.img}
        alt="card image"
        className="w-20 h-20 object-contain rounded-xl mb-5 shadow-md bg-black"
      />
      <h1 className="text-2xl font-bold text-center text-white mb-2 tracking-tight">
        <span className="text-[var(--color-primary)]">{props.heading}</span>
      </h1>
      <p className="text-base text-center text-[var(--color-text-muted)]">{props.desc}</p>
    </div>
  );
}

export default Card;
