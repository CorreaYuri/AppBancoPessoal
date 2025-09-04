

export default function Logo({subtitulo, width}: {subtitulo: string, width: string }) {
    return (
        <div className="containerLogoLanding flex flex-col items-center justify-center ">
            <img src="/logo.svg" alt="Logo" width={width} />
            <label className="text-xs text-white" htmlFor="Logo">{subtitulo}</label>
        </div>
    )
}   