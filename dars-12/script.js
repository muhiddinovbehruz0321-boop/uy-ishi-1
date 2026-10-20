
const postTodo = async () => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                userId: 1,
                title: "Rest API",
                body: "Bu mening birinchi POST so'rovim",
            })
        });

        if (!res.ok) {
            throw new Error("Xatolik: " + res.status);
        }

        let data = await res.json();
        console.log(data);

    } catch (error) {
        console.log("Xatolik:", error.message);
    }
};

postTodo();
