const words=['Beautiful.','Kind.','Irreplaceable.','Amazing.','Special.','Loved.'];
export default function YouAre(){return <section className="you-are section-frame"><p className="kicker">always remember</p><div>{words.map((word,index)=><h2 className="word fade" key={word} style={{'--delay':`${index*70}ms`}}>{word}</h2>)}</div></section>}
