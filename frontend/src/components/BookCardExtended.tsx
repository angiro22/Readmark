interface BookCardExtendedProps {
    title: string;
    author: string;
    progress: string | number;
    coverUrl: string;
}

export default function BookCardExtended({title, author, coverUrl}: BookCardExtendedProps) {
    return (
        <div className="bg-white px-6 py-4 flex items-center justify-between border-r-4 border-b-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <div className="float-left">
                <img src={coverUrl} alt={`${title} cover`}></img>
            </div>
            <div className="float-left">
                <h2 className="domine-font text-[48px]">{title}</h2>
                <p className="text-bronze font-semibold">{author}</p>
            </div>
        </div>
    )
}