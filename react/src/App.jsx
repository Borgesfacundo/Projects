import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard isFollowing userName="midudev">
                Miguel Angel Duran Crack
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="vxnder">
                Vanderhart
            </TwitterFollowCard>
        </section>
    )
}
