export function TwitterFollowCard({ userName, children, isFollowing }) {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar de Midudev" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName ">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}