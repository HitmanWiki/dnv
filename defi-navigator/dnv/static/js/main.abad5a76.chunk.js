(this.webpackJsonpcryptojunkies = this.webpackJsonpcryptojunkies || []).push([
    [0], {
        154: function(e, c, s) {},
        481: function(e, c, s) {
            "use strict";
            s.r(c);
            var t = s(2),
                a = s.n(t),
                i = s(23),
                n = s.n(i),
                r = s(142),
                l = s(143),
                j = s(150),
                d = s(149),
                o = (s(154), s(22)),
                b = s(8),
                h = s.p + "",
                m = s(0),
                O = function() {
                    return Object(m.jsx)("div", {
                        id: "",
                        children: Object(m.jsxs)("svg", {
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            width: "100px",
                            height: "100px",
                            viewBox: "100 100 400 400",
                            xmlSpace: "preserve",
                            children: [Object(m.jsxs)("filter", {
                                id: "dropshadow",
                                height: "130%",
                                children: [Object(m.jsx)("feGaussianBlur", { in: "SourceAlpha",
                                    stdDeviation: 5
                                }), Object(m.jsx)("feOffset", {
                                    dx: 0,
                                    dy: 0,
                                    result: "offsetblur"
                                }), Object(m.jsx)("feFlood", {
                                    floodColor: "red"
                                }), Object(m.jsx)("feComposite", {
                                    in2: "offsetblur",
                                    operator: "in"
                                }), Object(m.jsxs)("feMerge", {
                                    children: [Object(m.jsx)("feMergeNode", {}), Object(m.jsx)("feMergeNode", { in: "SourceGraphic"
                                    })]
                                })]
                            }), Object(m.jsx)("path", {
                                className: "path",
                                style: {
                                    filter: "url(#dropshadow)"
                                },
                                fill: "#000000",
                                d:""
                            })]
                        })
                    })
                },
                x = function(e) {
                    var c = e.title,
                        s = Object(t.useState)("false"),
                        a = Object(o.a)(s, 2),
                        i = a[0],
                        n = a[1],
                        r = function() {
                            n(!i)
                        };
                    return Object(m.jsxs)("header", {
                        children: [Object(m.jsx)("div", {
                            className: "logo",
                            children: Object(m.jsxs)("figure", {
                                children: [Object(m.jsx)("img", {
                                    src: h,
                                    alt: "Cypto Junkies logo"
                                }), Object(m.jsx)(O, {}), Object(m.jsx)("figcaption", {
                                    children: c
                                })]
                            })
                        }), Object(m.jsxs)("nav", {
                            className: "header-nav ".concat(i ? "" : "open"),
                            onClick: r,
                            children: [Object(m.jsx)(b.b, {
                                to: "/",
                                children: "Crypto Index"
                            }), Object(m.jsx)(b.b, {
                                to: "/news",
                                children: "News"
                            }), Object(m.jsx)(b.b, {
                                to: "/nft",
                                children: "NFT"
                            }), Object(m.jsx)(b.b, {
                                to: "/metrics",
                                "data-dev": "indev",
                                children: "Metrics"
                            }), Object(m.jsx)(b.b, {
                                to: "/invest",
                                "data-dev": "indev",
                                children: "Invest"
                            }), Object(m.jsx)(b.b, {
                                to: "/learn",
                                "data-dev": "indev",
                                children: "Learn"
                            })]
                        }), Object(m.jsx)("span", {
                            className: "toggle-nav ".concat(i ? "" : "open"),
                            onClick: r,
                            children: Object(m.jsx)("span", {
                                children: "Toggle navigation"
                            })
                        })]
                    })
                },
                u = s(5),
                p = s(40),
                v = s.n(p),
                g = s(63),
                A = s(146),
                f = s.n(A),
                k = function(e, c) {
                    var s = Object(t.useState)([]),
                        a = Object(o.a)(s, 2),
                        i = a[0],
                        n = a[1],
                        r = Object(t.useState)(!1),
                        l = Object(o.a)(r, 2),
                        j = l[0],
                        d = l[1],
                        b = Object(t.useState)(null),
                        h = Object(o.a)(b, 2),
                        m = h[0],
                        O = h[1];
                    return Object(t.useEffect)((function() {
                        (function() {
                            var c = Object(g.a)(v.a.mark((function c() {
                                return v.a.wrap((function(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            return c.next = 2, f.a.get(e).then((function(e) {
                                                n(e.data)
                                            })).catch((function(e) {
                                                O(e)
                                            })).finally((function() {
                                                d(!0)
                                            }));
                                        case 2:
                                        case "end":
                                            return c.stop()
                                    }
                                }), c)
                            })));
                            return function() {
                                return c.apply(this, arguments)
                            }
                        })()()
                    }), [e]), {
                        error: m,
                        isLoaded: j,
                        data: i
                    }
                },
                N = function(e) {
                    var c = e.name,
                        s = e.image,
                        t = e.symbol,
                        a = e.price,
                        i = e.volume,
                        n = e.priceChange,
                        r = e.marketcap,
                        l = e.circulatingSupply;
                    return Object(m.jsx)("div", {
                        className: "currency-container",
                        children: Object(m.jsxs)("div", {
                            className: "chart-row",
                            children: [Object(m.jsxs)("div", {
                                className: "coin",
                                children: [Object(m.jsx)("img", {
                                    src: s,
                                    alt: "crypto"
                                }), Object(m.jsx)("h2", {
                                    children: c
                                }), Object(m.jsx)("span", {
                                    className: "coin-symbol",
                                    children: t
                                })]
                            }), Object(m.jsxs)("div", {
                                className: "coin-data",
                                children: [Object(m.jsxs)("p", {
                                    className: "coin-price",
                                    children: ["$", a]
                                }), n < 0 ? Object(m.jsxs)("p", {
                                    className: "coin-percent red",
                                    children: [n.toFixed(2), "% ", Object(m.jsx)("span", {
                                        children: "(24h)"
                                    })]
                                }) : Object(m.jsxs)("p", {
                                    className: "coin-percent green",
                                    children: ["+", n.toFixed(2), "%", Object(m.jsx)("span", {
                                        children: "(24h)"
                                    })]
                                }), Object(m.jsxs)("p", {
                                    className: "coin-marketcap",
                                    children: ["$ ", r.toLocaleString()]
                                }), Object(m.jsxs)("p", {
                                    className: "coin-volume",
                                    children: ["$ ", i.toLocaleString()]
                                }), Object(m.jsxs)("p", {
                                    className: "circ-supply",
                                    children: [Object(m.jsx)("span", {
                                        className: "coin-symbol",
                                        children: t
                                    }), l.toLocaleString()]
                                })]
                            })]
                        })
                    })
                },
                y = function() {
                    return Object(m.jsx)("div", {
                        id: "loader-mask",
                        className: "loader-wrapper",
                        children: Object(m.jsx)("div", {
                            className: "loader"
                        })
                    })
                };
            var w = function() {
                    var e = Object(t.useState)(""),
                        c = Object(o.a)(e, 2),
                        s = c[0],
                        a = c[1],
                        i = k("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"),
                        n = i.data,
                        r = i.error,
                        l = i.isLoaded;
                    if (null !== r) return Object(m.jsxs)("div", {
                        children: [" Error: ", r.message]
                    });
                    if (!l) return Object(m.jsx)(y, {});
                    var j = function(e) {
                            a(e.target.value)
                        },
                        d = n.filter((function(e) {
                            return e.name.toLowerCase().includes(s.toLowerCase())
                        }));
                    return Object(m.jsxs)("div", {
                        className: "crypto-chart",
                        children: [Object(m.jsx)("div", {
                            className: "currency-container",
                            children: Object(m.jsxs)("div", {
                                className: "chart-row chart-header",
                                children: [Object(m.jsx)("div", {
                                    className: "coin",
                                    children: Object(m.jsx)("form", {
                                        children: Object(m.jsx)("input", {
                                            type: "text",
                                            placeholder: "Search",
                                            className: "search-input",
                                            onChange: j
                                        })
                                    })
                                }), Object(m.jsxs)("div", {
                                    className: "coin-data",
                                    children: [Object(m.jsx)("p", {
                                        className: "coin-price",
                                        children: "Price"
                                    }), Object(m.jsx)("p", {
                                        className: "coin-percent",
                                        children: "24h %"
                                    }), Object(m.jsx)("p", {
                                        className: "coin-marketcap",
                                        children: "Market Cap"
                                    }), Object(m.jsx)("p", {
                                        className: "coin-volume",
                                        children: " Volume(24h)"
                                    }), Object(m.jsx)("p", {
                                        className: "circ-supply",
                                        children: "  Circulating Supply  "
                                    })]
                                })]
                            })
                        }), d.map((function(e) {
                            return Object(m.jsx)(N, {
                                name: e.name,
                                image: e.image,
                                symbol: e.symbol,
                                marketcap: e.market_cap,
                                price: e.current_price,
                                priceChange: e.price_change_percentage_24h,
                                volume: e.total_volume,
                                circulatingSupply: e.circulating_supply
                            }, e.id)
                        }))]
                    })
                },
                C = function() {
                    return Object(m.jsx)("section", {
                        className: "crypto-index",
                        children: Object(m.jsx)(w, {})
                    })
                },
                S = function(e) {
                    var c = e.title,
                        s = e.description,
                        t = e.url,
                        a = e.image;
                    return Object(m.jsx)("a", {
                        href: t,
                        children: Object(m.jsxs)("div", {
                            className: "news-item",
                            children: [Object(m.jsx)("figure", {
                                children: Object(m.jsx)("img", {
                                    src: a,
                                    alt: "new image"
                                })
                            }), Object(m.jsxs)("div", {
                                className: "news-content",
                                children: [Object(m.jsx)("h3", {
                                    children: c
                                }), Object(m.jsx)("p", {
                                    children: s
                                })]
                            })]
                        })
                    })
                },
                J = (s(180), function() {
                    var e = Object(t.useState)(!0),
                        c = Object(o.a)(e, 2),
                        s = (c[0], c[1]);
                    Object(t.useEffect)((function() {
                        a(["https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880", "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860", "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707", "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615", "https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452", "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731", "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256", "https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776", "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389", "https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072"])
                    }), []);
                    var a = function() {
                        var e = Object(g.a)(v.a.mark((function e(c) {
                            var t;
                            return v.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, c.map((function(e) {
                                            return new Promise((function(c, s) {
                                                var t = new Image;
                                                t.src = e, t.onload = c(), t.onerror = s()
                                            }))
                                        }));
                                    case 2:
                                        return t = e.sent, e.next = 5, Promise.all(t);
                                    case 5:
                                        s(!1);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(c) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(m.jsx)("div", {})
                }),
                E = function() {
                    var e = k("https://gnews.io/api/v4/search?q=crypto&lang=en&token=9e855350d69e4b90fc112768700fa185"),
                        c = e.data,
                        s = e.error,
                        t = e.isLoaded;
                    return null !== s ? Object(m.jsxs)("div", {
                        children: [" Error: ", s.message]
                    }) : t ? Object(m.jsxs)("div", {
                        className: "news-feed",
                        children: [Object(m.jsx)(J, {}), c.articles.map((function(e) {
                            var c = e.index,
                                s = e.title,
                                t = e.description,
                                a = e.url,
                                i = e.image;
                            return Object(m.jsx)(S, {
                                title: s,
                                description: t,
                                url: a,
                                image: i
                            }, c)
                        }))]
                    }) : Object(m.jsx)(y, {})
                },
                I = function() {
                    return Object(m.jsx)("section", {
                        className: "crypto-news",
                        children: Object(m.jsx)(E, {})
                    })
                };
            var T = function() {
                    var e = k("https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=19d66f3f573373abd0d393d5b1627b863a61892555ae3d07263f7e93c6d7"),
                        c = e.data,
                        s = (e.error, e.isLoaded, k("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR")),
                        t = s.data,
                        a = (s.error, s.isLoaded, {
                            total: 90630229601,
                            dominance_name: "Aave",
                            dominance_value: 14092046336,
                            value: {
                                total: {
                                    USD: {
                                        value: 90630229601
                                    },
                                    ETH: {
                                        value: 7457939.491180869
                                    },
                                    BTC: {
                                        value: 206599.2238305697
                                    }
                                },
                                balance: {
                                    ERC20: {
                                        DAI: {
                                            value: 3609873380.3524885
                                        }
                                    }
                                },
                                tvl: {
                                    ETH: {
                                        value: 26489918.405993786
                                    }
                                }
                            },
                            dominance_pct: 15.548946966194721
                        });
                    return console.log(c), Object(m.jsxs)("div", {
                        className: "defi-data",
                        children: [Object(m.jsxs)("div", {
                            className: "eth-gas",
                            children: [Object(m.jsxs)("h2", {
                                children: ["Gas Prices ", t.USD / 1e9 * c.fast, "$ "]
                            }), Object(m.jsxs)("div", {
                                children: ["fast :  ", c.fast]
                            }), Object(m.jsxs)("div", {
                                children: ["fastest :  ", c.fastest]
                            }), Object(m.jsxs)("div", {
                                children: ["safelow :  ", c.safeLow]
                            }), Object(m.jsxs)("div", {
                                children: ["average :  ", c.average]
                            }), Object(m.jsxs)("div", {
                                children: ["block time: ", c.block_time]
                            })]
                        }), Object(m.jsxs)("div", {
                            className: "defi-market-data",
                            children: [Object(m.jsx)("h2", {
                                children: "Defi"
                            }), Object(m.jsxs)("div", {
                                className: "defi-market-column",
                                children: [Object(m.jsxs)("div", {
                                    className: "defi-market-box defi-market-total",
                                    children: [Object(m.jsx)("h2", {
                                        children: "Total Value Locked (USD)"
                                    }), Object(m.jsx)("span", {
                                        children: a.total
                                    })]
                                }), Object(m.jsxs)("div", {
                                    className: "defi-market-box defi-market-dominance",
                                    children: [Object(m.jsxs)("h2", {
                                        children: [a.dominance_name, " Dominance"]
                                    }), Object(m.jsxs)("span", {
                                        children: [" ", a.dominance_pct, " %"]
                                    })]
                                })]
                            }), Object(m.jsxs)("div", {
                                className: "tlv-market-column",
                                children: [Object(m.jsxs)("div", {
                                    className: "tvl-defi",
                                    children: [Object(m.jsx)("h2", {
                                        children: "Total Value Locked (USD) in DeFi"
                                    }), Object(m.jsx)("span", {
                                        children: a.value.total.USD.value
                                    })]
                                }), Object(m.jsxs)("div", {
                                    className: "tvl-defi",
                                    children: [Object(m.jsx)("h2", {
                                        children: "ETH in DeFi"
                                    }), Object(m.jsx)("span", {
                                        children: a.value.total.ETH.value
                                    })]
                                }), Object(m.jsxs)("div", {
                                    className: "tvl-defi",
                                    children: [Object(m.jsx)("h2", {
                                        children: "BTC in DeFi"
                                    }), Object(m.jsx)("span", {
                                        children: a.value.total.BTC.value
                                    })]
                                })]
                            }), Object(m.jsx)("div", {
                                className: "devices-column"
                            })]
                        })]
                    })
                },
                L = function() {
                    return Object(m.jsx)("section", {
                        className: "defi",
                        children: Object(m.jsx)(T, {})
                    })
                },
                U = function() {
                    var e = k("https://gnews.io/api/v4/search?q=nft&lang=en&token=9e855350d69e4b90fc112768700fa185"),
                        c = e.data,
                        s = e.error,
                        t = e.isLoaded;
                    return null !== s ? Object(m.jsxs)("div", {
                        children: [" Error: ", s.message]
                    }) : t ? Object(m.jsx)("div", {
                        className: "nfts",
                        children: Object(m.jsx)("div", {
                            className: "news-feed",
                            children: c.articles.map((function(e) {
                                var c = e.index,
                                    s = e.title,
                                    t = e.description,
                                    a = e.url,
                                    i = e.image;
                                return Object(m.jsx)(S, {
                                    id: c,
                                    title: s,
                                    description: t,
                                    url: a,
                                    image: i
                                })
                            }))
                        })
                    }) : Object(m.jsx)(y, {})
                },
                z = function() {
                    return Object(m.jsx)("section", {
                        className: "crypto-news",
                        children: Object(m.jsx)(U, {})
                    })
                };
            var V = function() {
                    var e = k("https://api.alternative.me/fng/?limit=14"),
                        c = e.data,
                        s = e.error,
                        t = e.isLoaded;
                    if (null !== s) return Object(m.jsxs)("div", {
                        children: [" Error: ", s.message]
                    });
                    if (!t) return Object(m.jsx)(y, {});
                    var a = function(e) {
                        var c = e.map((function(e) {
                            return e.value
                        })).reduce((function(e, c) {
                            return parseInt(e) + parseInt(c)
                        }), 0) / 7;
                        return Math.floor(c)
                    };

                    function i(e) {
                        switch (console.log("1  " + e), !0) {
                            case e < 24:
                                return "Extreme Fear";
                            case e <= 46:
                                return "Fear";
                            case e <= 54:
                                return "Neutral";
                            case e <= 74:
                                return "Greed";
                            case e > 74:
                                return "Extreme Greed";
                            default:
                                return ""
                        }
                    }
                    var n = a(c.data.slice(0, 7)),
                        r = a(c.data.slice(7)),
                        l = c.data[0].value_classification,
                        j = c.data[1].value_classification,
                        d = i(n),
                        o = i(r);
                    return Object(m.jsxs)("div", {
                        className: "fear-and-greed",
                        children: [Object(m.jsx)("img", {
                            src: "https://alternative.me/crypto/fear-and-greed-index.png",
                            alt: "Latest Crypto Fear & Greed Index"
                        }), Object(m.jsxs)("div", {
                            className: "history-data",
                            children: [Object(m.jsx)("h3", {
                                children: "Historical Values"
                            }), Object(m.jsxs)("div", {
                                className: "gaf-values",
                                children: [Object(m.jsxs)("div", {
                                    className: "gaf-elem",
                                    "gaf-attr": l,
                                    children: [Object(m.jsxs)("div", {
                                        className: "gaf-time",
                                        children: [Object(m.jsx)("span", {
                                            children: "Now"
                                        }), Object(m.jsxs)("div", {
                                            className: "gaf-lbl",
                                            children: [l, " "]
                                        })]
                                    }), Object(m.jsxs)("div", {
                                        className: "gaf-num-val",
                                        children: [c.data[0].value, " "]
                                    })]
                                }), Object(m.jsxs)("div", {
                                    className: "gaf-elem",
                                    "gaf-attr": j,
                                    children: [Object(m.jsxs)("div", {
                                        className: "gaf-time",
                                        children: [Object(m.jsx)("span", {
                                            children: "Yesterday"
                                        }), Object(m.jsxs)("div", {
                                            className: "gaf-lbl",
                                            children: [j, " "]
                                        })]
                                    }), Object(m.jsxs)("div", {
                                        className: "gaf-num-val",
                                        children: [c.data[1].value, " "]
                                    })]
                                }), Object(m.jsxs)("div", {
                                    className: "gaf-elem",
                                    "gaf-attr": d,
                                    children: [Object(m.jsxs)("div", {
                                        className: "gaf-time",
                                        children: [Object(m.jsx)("span", {
                                            children: "This Week"
                                        }), Object(m.jsxs)("div", {
                                            className: "gaf-lbl",
                                            children: [" ", d]
                                        })]
                                    }), Object(m.jsxs)("div", {
                                        className: "gaf-num-val",
                                        children: [" ", n]
                                    })]
                                }), Object(m.jsxs)("div", {
                                    className: "gaf-elem",
                                    "gaf-attr": o,
                                    children: [Object(m.jsxs)("div", {
                                        className: "gaf-time",
                                        children: [Object(m.jsx)("span", {
                                            children: "Last Week"
                                        }), Object(m.jsxs)("div", {
                                            className: "gaf-lbl",
                                            children: [" ", o]
                                        })]
                                    }), Object(m.jsx)("div", {
                                        className: "gaf-num-val",
                                        children: r
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                P = function() {
                    return Object(m.jsx)("section", {
                        className: "crypto-metrics",
                        children: Object(m.jsx)(V, {})
                    })
                },
                B = function() {
                    return Object(m.jsx)("section", {
                        className: "invest",
                        children: Object(m.jsxs)("div", {
                            className: "invest-container",
                            children: [Object(m.jsx)("a", {
                                href: "https://accounts.binance.com/en/register?ref=10799690",
                                children: Object(m.jsxs)("div", {
                                    className: "binance-wrapper",
                                    children: [Object(m.jsx)("div", {
                                        className: "binance"
                                    }), Object(m.jsxs)("div", {
                                        className: "binance-content",
                                        children: [Object(m.jsx)("h2", {
                                            children: "Binance"
                                        }), Object(m.jsx)("p", {
                                            children: "Binance is a cryptocurrency exchange which is currently the largest exchange in the world in terms of daily trading volume of cryptocurrencies. It was founded in 2017 and is registered in the Cayman Islands. Binance was founded by Changpeng Zhao, a developer who had previously created high frequency trading software."
                                        }), Object(m.jsx)("div", {
                                            className: "sign-up",
                                            children: "SignUp Now"
                                        })]
                                    })]
                                })
                            }), Object(m.jsx)("a", {
                                href: "https://cex.io/r/0/up106177983/0/",
                                children: Object(m.jsxs)("div", {
                                    className: "cexio-wrapper",
                                    children: [Object(m.jsx)("div", {
                                        className: "cexio"
                                    }), Object(m.jsxs)("div", {
                                        className: "cexio-content",
                                        children: [Object(m.jsx)("h2", {
                                            children: "CEX.io"
                                        }), Object(m.jsx)("p", {
                                            children: "CEX.IO was one of the first platforms to make fiat-to-crypto transactions accessible by offering card payments and bank transfers to the clients. The leading cryptocurrency exchange  offers Bitcoin, ETH and other trading options , provides 24/7 customer support, high level of security, and stable deposits and withdrawals."
                                        }), Object(m.jsx)("div", {
                                            className: "sign-up",
                                            children: "SignUp Now"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                R = function() {
                    return Object(m.jsxs)("div", {
                        className: "404",
                        children: [Object(m.jsx)("h2", {
                            children: ""
                        }), Object(m.jsx)("h2", {
                            children: ""
                        })]
                    })
                },
                M = s.p + "static/media/coindesk.a6c7cad2.svg",
                H = s.p + "static/media/cointelegraph.875575eb.svg",
                Z = s.p + "static/media/theblock.0e4ecbcf.svg",
                Y = s.p + "static/media/coingecko.a3b178db.png",
                W = s.p + "static/media/coinmarketcap.3f224fbe.svg",
                F = s.p + "static/media/defipulse.f8b058af.png",
                D = function() {
                    return Object(m.jsxs)("section", {
                        className: "crypto-learn",
                        children: [Object(m.jsxs)("div", {
                            className: "contrainer",
                            children: [Object(m.jsx)("h3", {
                                children: "Indexes"
                            }), Object(m.jsxs)("div", {
                                className: "resources",
                                children: [Object(m.jsx)("a", {
                                    href: "coingecko.com",
                                    children: Object(m.jsx)("img", {
                                        className: "svg-logo coingecko",
                                        src: Y
                                    })
                                }), Object(m.jsx)("a", {
                                    href: "coinmarketcap.com",
                                    children: Object(m.jsx)("img", {
                                        className: "svg-logo",
                                        src: W
                                    })
                                }), Object(m.jsx)("a", {
                                    href: ""
                                })]
                            })]
                        }), Object(m.jsxs)("div", {
                            className: "contrainer",
                            children: [Object(m.jsx)("h3", {
                                children: "News"
                            }), Object(m.jsxs)("div", {
                                className: "resources",
                                children: [Object(m.jsx)("a", {
                                    href: "cointelegraph.com",
                                    children: Object(m.jsx)("img", {
                                        className: "svg-logo",
                                        src: H
                                    })
                                }), Object(m.jsx)("a", {
                                    href: "coindesk.com",
                                    children: Object(m.jsx)("img", {
                                        className: "svg-logo",
                                        src: M
                                    })
                                }), Object(m.jsx)("a", {
                                    href: "theblockcrypto.com",
                                    children: Object(m.jsx)("img", {
                                        className: "svg-logo block",
                                        src: Z
                                    })
                                })]
                            })]
                        }), Object(m.jsxs)("div", {
                            className: "container",
                            children: [Object(m.jsx)("h3", {
                                children: "Defi"
                            }), Object(m.jsxs)("div", {
                                className: "resources",
                                children: [Object(m.jsx)("a", {
                                    href: "defipulse.com",
                                    children: Object(m.jsx)("img", {
                                        className: "svg-logo defi-pulse",
                                        src: F
                                    })
                                }), Object(m.jsx)("a", {
                                    href: "stakingrewards.com",
                                    children: Object(m.jsx)("img", {
                                        className: "svg-logo staking-rewards",
                                        src: "data:image/png;base64,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"
                                    })
                                }), Object(m.jsx)("a", {
                                    href: ""
                                })]
                            })]
                        })]
                    })
                },
                X = function(e) {
                    var c = e.title;
                    return Object(m.jsx)("footer", {
                        children: Object(m.jsxs)("div", {
                            className: "footer-container",
                            children: [Object(m.jsx)("div", {
                                className: "site-info",
                                children: Object(m.jsxs)("aside", {
                                    children: [Object(m.jsx)("h4", {
                                        children: "Site Information"
                                    }), Object(m.jsxs)("div", {
                                        className: "site-info-links",
                                        children: [Object(m.jsx)("a", {
                                            href: "",
                                            children: "About / Contact Us"
                                        }), Object(m.jsx)("a", {
                                            href: "",
                                            children: "Contributors"
                                        })]
                                    }), Object(m.jsxs)("div", {
                                        className: "site-info-links",
                                        children: [Object(m.jsx)("a", {
                                            href: "",
                                            children: "Get our free newsletter"
                                        }), Object(m.jsx)("a", {
                                            href: "",
                                            children: "Privacy Policy"
                                        })]
                                    }), Object(m.jsxs)("div", {
                                        className: "site-info-links",
                                        children: [Object(m.jsx)("a", {
                                            href: "",
                                            children: "Site Map"
                                        }), Object(m.jsx)("a", {
                                            href: "",
                                            children: "Want to Become a Guest Blogger?"
                                        })]
                                    })]
                                })
                            }), Object(m.jsxs)("div", {
                                className: "about-us",
                                children: [Object(m.jsx)("div", {
                                    className: "footer-logo",
                                    children: Object(m.jsxs)("figure", {
                                        children: [Object(m.jsx)(O, {}), Object(m.jsx)("figcaption", {
                                            children: c
                                        })]
                                    })
                                }), Object(m.jsxs)("div", {
                                    className: "about-content",
                                    children: [Object(m.jsx)("h4", {
                                        children: "About US"
                                    }), Object(m.jsx)("p", {
                                        children: "Defi Navigator is powered by  people with a passion for blockchain and cryptocurencies. Contact us if you interested to contribue."
                                    })]
                                }), Object(m.jsxs)("div", {
                                    className: "follow-us",
                                    children: [Object(m.jsx)("h4", {
                                        children: "Follow Us"
                                    }), Object(m.jsxs)("div", {
                                        className: "follow-us links",
                                        children: [Object(m.jsx)("a", {
                                            href: "https://twitter.com/",
                                            children: Object(m.jsx)("img", {
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAflAAAH5QFPDbM3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAadQTFRF////Var/TbPmVarqVarsUq3vVaruVKvuVa3vVqztVKvtVqzuVK3vVqvtVazuVKzvVq3uVazuVazuVazuVa3uVaztVazuVazuVavuVazuVazuVazuVazuVazuVazuVqzuVq3uV63uWK3uWa7uWq7uW67uW6/uXK/uXrDuX7HuYLHuYbHuYrLuY7LuZLPuZbPuZrPuZrTuarXvbbfvbrfvcLjvcrnvc7nvdLrvdbvverzver3ve73vfL3vfL7vfr7vf7/vgL/vgcDvgsDvhMHvhcLvhsLvh8Pvi8TvjMXvj8bvkMbwkMfwkcfwk8jwlcnwl8rwmMrwmsvwnMzwnczwns3wn83woM3woc7wos/wpdDwptHwqdLwq9PwrNPwrdTwsdXwt9jxuNjxudnxutnxu9rxvNrxvtvxwNzxwdzxw93xxd7xxt/xx9/xyeDxy+HxzeLxzuLxz+Px0eTx0uTx1eXx2efx2+jx3Ojx3Onx4evy4uvy4+zy5Ozy5u3y5+3y5+7y6O7y6e7y6u/y6+/y6/Dy7PDy7fDy7vHy7/Hy8PHy8PLy8fLyJ+tyzgAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAArZJREFUWMOtV/lDEkEUXuQQYTnkBvGRVEaHZNlBaYeddtmhZpkdRpYdYCcd2kF4lO0fHSsiO+/tDrss328z+30fzJuZN+8JggasTtHrD0YTiWjQ7xWdVsEQbO5ADzDoCbhtetUdnnAvqKA37OnQIbe4YqCJmMvSTN8ZAS4inVy5PQRNEbJr6x1x0IG4Q0vflQRdSHapR88HuuFTiaWlGwygmzr4wBB8ZP1gECgOjqRRgySzF/Y4GEZceR5C0AJCivMLLWH7VFsirRlE6nvpghbh2rr/sVYNYrX84GnO3Hd2aubCAJ33bBqEmbl0itB2PdyQZBQGAVKn5oYbX8Kb+Y/NX9eeYIcjJWkLP2/c+yItKrOcnCfdLP2dhBx2fpKU+HFc+dFdNQgw9NSKhBxmGP3XS7efHm58DFTzP5u/98usooKSXmMMKlL5hDLbWwUnWvGSTFu5s6M+zkksKicZulMQkcF8jff+Yl9tfJPVr51h6aLgRQbjdery7JA8vssafER0r+BHMwPfFBF7NXv9AWuwiOh+IYiPzdFfEgfPETsoRNmJweLUrXWOwSNkEBUS7ETqt8TFJDJIYAN4yzcYJgZoCXCZqy/3kSWQIBZ5BgtAgoi3EbIfOAbjQLbRS65/f/6vlv57P5CDJBKDA4dOa0VympBFcpkAhjT/QDlDyE58nWXktQwmCLV6nVFCkZHRCGOBpssATWky9r5RjWCWMt00qdYw+noJ6/+MqpSONprWty1KrH71vAoprPmwHCvgDRhR+xWP6tO2O3f12T+kL+U4T5vycc1OL3zeIOGrTKZ5jyv7vJ8jl2l17mCT5x0VGLn55YZ6/eWVPU0LDFriZHJj9/MvHk+MjWR0lTjmiyzTZZ75QtN8qWu+2DZd7ptvONrQ8phvusy3fW1oPM23vm1ovo21//8Bmj6Wc/HxNSgAAAAASUVORK5CYII="
                                            })
                                        }), Object(m.jsx)("a", {
                                            href: "https://t.me/",
                                            children: Object(m.jsx)("img", {
                                                src: "data:image/png;base64,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"
                                            })
                                        }), Object(m.jsx)("a", {
                                            href: !0,
                                            children: Object(m.jsx)("img", {
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAflAAAH5QFPDbM3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPZQTFRF////VVWqM02ZQFWVOVWXOlqUPFmZPFuXO1iWPFiXO1mZO1iYO1mZO1iYO1mYO1qZO1mYO1iYO1qXO1mYOlmXO1mYO1mYO1mYO1mZO1mXO1mYO1mYO1mYO1mYO1mYPVqZQ2CcRGGdRWGdSmWgTWihTWmiUGujUWujWnOoXXaqZX2uZ36va4KxbIOyeIy4eI24eo65f5K8hZe/iZvBipzCjJ3CjJ7DkKHEkaLFlKXHlaXHmqrKnazLn67No7HPpLLPp7TRqbbSqrfTq7jTrbnUrrrUrrvVucTaztXl0djn1dzp2uDs2+Ds3+Tu8/X5+/z9/Pz9////575kmQAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAAflJREFUWMOtl9d2wjAMhk1ZIWRBEkYAd1K66N4bWjrpyPu/TIESDhApVo75L2P0HSxrMoYoqWiGZZc9r2xbhqYkWSyl8sUan1GtmE9RrZd0t8EBNVx9iWCeUCscVUVNiOyzJR6pUjbSPO1woZw0bp+pcoKqGcw+V+ck1XOw90xOlgn4MlHgMVQIE0weS2bo/jym5vyQwfy3fXLbe+k9P3Wv5z058xZp5P32vvxA/dBrTscDEj/nvz4O4M5U/ML29/6UPsPnk6hOwPG/+TMN6AN5EbylCv+BR18A4Oo4/5H8/RYCKv/1QYftNya2H91Op3MF/UYfAVwYsBvYv+PR5I7qXwM+3A8AZzigMayTeeTwIAAcRQR0fgAoygCKg/pfkwHUkkyBvq80m83jAHDaHGodJihMgz5f+iG9wQCNGUTAKwwwmEUEPMAAi9lEwAUMsFmZCDiEAWXmEQE7MMAjA1oYALxCq91u3wSmd+2hlrEr2FwmEgdOtOQAFhxIdIABhzIdoMHJRAco8uksXVDkSxpWVCmAUVHFyjoF4EY1FgpAj2ptBMC4tSHNlQBQI9u7GDBp7/CAIQZko0ccIcARDFkiwMyQBY15AkA9Ixo0BYCccNSNBpjiYXt1a6w12rAtPe7LLxwLWHnkly75tW8Bi6f86ruA5Tve+v8H8zzT+VH/LzgAAAAASUVORK5CYII="
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(m.jsxs)("div", {
                                className: "footer",
                                children: [Object(m.jsxs)("div", {
                                    className: "copy",
                                    children: [Object(m.jsx)("span", {
                                        children: "\xa9 2023 Defi Navigator "
                                    }), Object(m.jsx)("span", {
                                        children: "| Developed by DNV Token"
                                    })]
                                }), Object(m.jsx)("div", {
                                    className: "footer-links",
                                    children: Object(m.jsxs)("nav", {
                                        className: "footer-nav",
                                        children: [Object(m.jsx)(b.b, {
                                            to: "/",
                                            children: "Crypto Index"
                                        }), Object(m.jsx)(b.b, {
                                            to: "/news",
                                            children: "News"
                                        }), Object(m.jsx)(b.b, {
                                            to: "/nft",
                                            children: "NFT"
                                        }), Object(m.jsx)(b.b, {
                                            to: "/metrics",
                                            "data-dev": "indev",
                                            children: "Metrics"
                                        }), Object(m.jsx)(b.b, {
                                            to: "/invest",
                                            "data-dev": "indev",
                                            children: "Invest"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                Q = function(e) {
                    Object(j.a)(s, e);
                    var c = Object(d.a)(s);

                    function s() {
                        var e;
                        Object(r.a)(this, s);
                        for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                        return (e = c.call.apply(c, [this].concat(a))).state = {
                            title: "Defi Navigator"
                        }, e
                    }
                    return Object(l.a)(s, [{
                        key: "render",
                        value: function() {
                            return Object(m.jsx)(b.a, {
                                basename: "/definavigator",
                                children: Object(m.jsxs)("main", {
                                    children: [Object(m.jsx)(x, {
                                        title: this.state.title
                                    }), Object(m.jsxs)(u.c, {
                                        children: [Object(m.jsx)(u.a, {
                                            path: "/",
                                            component: C,
                                            exact: !0
                                        }), Object(m.jsx)(u.a, {
                                            path: "/news",
                                            component: I
                                        }), Object(m.jsx)(u.a, {
                                            path: "/defi",
                                            component: L
                                        }), Object(m.jsx)(u.a, {
                                            path: "/nft",
                                            component: z
                                        }), Object(m.jsx)(u.a, {
                                            path: "/metrics",
                                            component: P
                                        }), Object(m.jsx)(u.a, {
                                            path: "/learn",
                                            component: D
                                        }), Object(m.jsx)(u.a, {
                                            path: "/invest",
                                            component: B
                                        }), Object(m.jsx)(u.a, {
                                            component: R
                                        })]
                                    }), Object(m.jsx)(X, {
                                        title: this.state.title
                                    })]
                                })
                            })
                        }
                    }]), s
                }(t.Component);
            n.a.render(Object(m.jsx)(a.a.StrictMode, {
                children: Object(m.jsx)(Q, {})
            }), document.getElementById("root"))
        }
    },
    [
        [481, 1, 2]
    ]
]);
//# sourceMappingURL=main.abad5a76.chunk.js.map