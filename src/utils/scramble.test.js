import scramble from "./scramble";

test("returns an array of span elements", () => {
    expect(scramble("hi!")).toStrictEqual([
        <span className="letter" key='0'>h</span>,
        <span className="letter" key='1'>i</span>,
        <span className="letter" key='2'>!</span>
    ])

    expect(scramble("2 word")).toStrictEqual([
        <span className="letter" key='0'>2</span>,
        <span className="letter" key='1'> </span>,
        <span className="letter" key='2'>w</span>,
        <span className="letter" key='3'>o</span>,
        <span className="letter" key='4'>r</span>,
        <span className="letter" key='5'>d</span>
    ])
})