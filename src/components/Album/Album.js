export function Album({album}) {
    return (
        <div>
            <p>Album {album.id} -- {JSON.stringify(album)}</p>
        </div>
    );
}