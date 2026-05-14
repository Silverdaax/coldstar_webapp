import { ListButtons } from "./Landing.styles"

export default function Landing() {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "white",

                display: "flex",
                flexDirection: "column",

                justifyContent: "center",
                alignItems: "center",

                gap: "24px",
            }}
        >
            <div
                style={{
                    width: "600px",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid grey",
                    borderRadius: "12px",
                    textAlign: "left",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "12px",
                    }}
                >
                    <img
                        src="circle_i_icon.png"
                        alt="info icon"
                        style={{
                            width: "36px",
                            height: "36px",
                            marginLeft: "16px",
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h1
                            style={{
                                margin: 0,
                                color:'black'
                            }}
                        >
                            Project Coldstar
                        </h1>

                        <p
                            style={{
                                marginTop: "24px",
                            }}
                        >
                            This is a work in progress and will serve to be a replacement for other list builders
                        </p>
                    </div>
                </div>
            </div>

            <ListButtons
                onClick={() => console.log("create new list clicked")}
            >
                <img
                    src="Table.png"
                    style={{ width: "18px", height: "18px" }}
                />

                <div style={{ fontSize: "20px" }}>
                    Create New List
                </div>
            </ListButtons>

            <ListButtons
                width="250px"
                bgColor="white"
                border="1px solid darkgrey"
                disabled
            >
                <img src="Star.png" />

                <div
                    style={{
                        fontSize: "20px",
                        color: "grey",
                    }}
                >
                    Saved Lists
                </div>
            </ListButtons>
        </div>
    );
}