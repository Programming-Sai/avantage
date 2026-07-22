type Props = {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  body: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, titleTop, titleBottom, body, dark }: Props) {
  const text = dark ? 'text-white' : 'text-slate-900';
  const sub = dark ? 'text-white/75' : 'text-slate-600';

  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-bold uppercase tracking-[0.35em] ${dark ? 'text-white/70' : 'text-[#D48C2B]'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-4xl font-semibold leading-none sm:text-5xl ${text}`}>
        <span className="block">{titleTop}</span>
        {titleBottom ? <span className="block">{titleBottom}</span> : null}
      </h2>
      {body ? <p className={`mt-5 text-base leading-7 ${sub}`}>{body}</p> : null}
    </div>
  );
}
