import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import TimeLine from "../src/components/TimeLine";
import React from "react";
import { VideoService } from "../src/components/Services/VideoService";


function HomePage() {

    const service = VideoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});     // config.playlists

    React.useEffect(() => {
        console.log("useEffect");
        service.getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                //forma imutavel
                const novasPlaylists = { ...playlists };
                dados.data?.forEach((video) => {
                    if (!novasPlaylists[video.playlists]) novasPlaylists[video.playlists] = [];
                    novasPlaylists[video.playlists].push(video);
                })
                setPlaylists(novasPlaylists);
            });

    }, []);
    return (
        <>

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,

            }}>                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />

                <TimeLine searchValue={valorDoFiltro} playlists={playlists}>
                    Conteúdo
                </TimeLine>
            </div>
        </>
    );
}


export default HomePage