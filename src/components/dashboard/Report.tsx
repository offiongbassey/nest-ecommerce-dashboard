interface ReportProps {
    name: string;
    figure: string;
    desc: string;
    children: React.ReactNode;
}

const Report = ({ name, figure, desc, children }: ReportProps) => {
  return (
    <div className="container flex gap-2 text-green-30">
        <div>
            {children}
        </div>
        <div>
            <h4 className="text-lg font-[600]">{name}</h4>
            <h2 className="text-2xl my-1 font-[600]">{figure}</h2>
            <p className="text-xs">{desc}</p>
        </div>
    </div>
  )
}

export default Report
