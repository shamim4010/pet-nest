
async function Pets({ params }) {
    const {name} = await params;
    console.log(name)
    return (
        <div>
            <Suspense fallback={<Loading />} >
            <SingaleBook {...{booksData, names}} />
            </Suspense>
        </div>
    )
}

export default Pets