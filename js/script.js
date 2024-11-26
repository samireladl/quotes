var qoute = [
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--Elbert Hubbard"
    },

    {
        qoute: "The best revenge is massive success.",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "You miss 100% of the shots you don't take.",
        Auther: "--Wayne Gretzy"
    },
    {
        qoute: "Be yourself; everyone else is already taken.",
        Auther: "--Oscar Wilde"
    },

    {
        qoute: "A room without books is like a body without a soul.",
        Auther: "--Marcus Tullius Cicero"
    },
    {
        qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        Auther: "--Albert Einstein"
    },
    {
        qoute: "You only live once, but if you do it right, once is enough",
        Auther: "--Mae West"
    },

    {
        qoute: "Be the change that you wish to see in the world.",
        Auther: "--Mahatma Gandhi"
    },
    {
        qoute: "If you tell the truth, you don't have to remember anything.",
        Auther: "--Mark Twain"
    },
]

function getQoutes() {
    var num = Math.floor(Math.random() * qoute.length)
    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;
}