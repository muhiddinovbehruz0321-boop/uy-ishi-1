
const getData = async () => {
    try {
        const requests = [
            {
                name: "posts",
                url: "posts",
                body: {
                    userId: 1,
                    title: "Yangi post",
                    body: "Bu mening yangi postim"
                }
            },
            {
                name: "comments",
                url: "comments",
                body: {
                    postId: 1,
                    name: "Yangi comment",
                    email: "behruz@gmail.com",
                    body: "Bu mening commentim"
                }
            },
            {
                name: "albums",
                url: "albums",
                body: {
                    userId: 1,
                    title: "Yangi albom"
                }
            },
            {
                name: "photos",
                url: "photos",
                body: {
                    albumId: 1,
                    title: "Yangi rasm",
                    url: "https://picsum.photos/600",
                    thumbnailUrl: "https://picsum.photos/150"
                }
            },
            {
                name: "todos",
                url: "todos",
                body: {
                    userId: 1,
                    title: "Yangi todo",
                    completed: false
                }
            },
            {
                name: "users",
                url: "users",
                body: {
                    name: "behruz",
                    username: "behruz",
                    email: "behruz@gmail.com"
                }
            }
        ];

        const results = await Promise.all(
            requests.map(async (item) => {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/${item.url}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify(item.body)
                    }
                );

                if (!res.ok) {
                    throw new Error(`${item.name}: ${res.status}`);
                }

                return {
                    name: item.name,
                    data: await res.json()
                };
            })
        );

        results.forEach((item) => {
            console.log(item.name, item.data);
        });
    } catch (error) {
        console.error("Xatolik:", error);
    }
};

getData();
