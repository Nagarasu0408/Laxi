function WorkingFlow() {
    return (
        <>
            <div id="list-example" class="list-group">
                <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                <h4 id="list-item-1">Item 1</h4>
                <p>Dolore ad et minim laborum velit irure non labore cillum qui.Laboris reprehenderit officia consequat exercitation deserunt proident cupidatat.Cupidatat nulla quis non magna deserunt culpa anim ad labore qui voluptate deserunt excepteur Lorem.Quis anim veniam ullamco consectetur nisi labore ex consectetur fugiat irure ea Lorem ad.Ea cupidatat ullamco aliquip sit.Est commodo et duis qui irure incididunt magna sunt ipsum excepteur nostrud.Culpa eu sint excepteur velit non nulla amet enim occaecat elit sit fugiat laboris labore.Incididunt commodo dolor reprehenderit aliqua.Sit et ex tempor adipisicing.</p>
                <h4 id="list-item-2">Item 2</h4>
                <p>...</p>
                <h4 id="list-item-3">Item 3</h4>
                <p>...</p>
                <h4 id="list-item-4">Item 4</h4>
                <p>...</p>
            </div>
        </>
    );
}

export default WorkingFlow;