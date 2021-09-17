import React from "react";
import "./styles/Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__posters">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB665379733_.jpg"
                    alt=""
                />
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
                    alt=""
                />
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/prime/X-site/ft_premium_centre_desktop_hero_large_surprise._CB668381715_.png"
                    alt=""
                />
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NDY4NmExNTct/NDY4NmExNTct-NGQ0ZmI0ZmMt-w3000._CB644939564_.jpg"
                    alt=""
                />
                </div>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses PaperBack"
                        price={11.55}
                        image="https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=118&h=180&c=7&o=5&pid=1.7"
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer For Baking,Stylish Kitchen Mixer with K-beater,Dough Hook And Whisk,5 Litre Glass Bowl"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903858"
                        title="Samsung - 34-inch Premium Curved Monitor with 21:9 Wide Screen, USB Type C Connectivity & Ultra WQHD Resolution - LC34H890WJWXXL"
                        price={599.49}
                        image="https://m.media-amazon.com/images/I/91+fneWO62L._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product
                        id="23445930"
                        title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)"
                        price={199.99}
                        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AQADASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAECAwcEBQYI/8QARRAAAgEDAgMFBQUEBwYHAAAAAQIRAAMhBBIiMUEFBhNRYTJCcYGRI1KhsfAHFHLBFTOCktHh8RYlYqKywhc0Q0VWk8P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgQBA//EADARAQACAQIDBAcJAAAAAAAAAAABAgMRMQQhQRITcbEUMkJTgZGhUVJUYpKiwdHh/9oADAMBAAIRAxEAPwDbdKUoFKUoFKUoFKUoFKUoFKUoFKUoFKVhbVaRTtN+1uGSoYFh1yFzQZqVxT2j2WpIfW6VCIBFy6iRP8RFclWVgGUhlPIqQQfgRQTSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBVWdEV3dlVFBZmYgKoHUk4rqO2u8XZnYqbbzC7q3ANnSowFx55FjmAemM9Aa1f2t3h7X7Xltffa1pS7La09kAWQbZhuEtB2yJLTBxABoPe9p9+uwtCWt6YXNddEidPC2AYMDxW59OSmvI6vvz3k1Zbwb1jSWZI2aW0puQcCXvEmZnlHy5V5poW2x2MAN4YOTuAUbmYZMHlM8uZ3AzVTcRVCWwAeEZ2llcAJBZug3GSQYnqrcIcnU67tHWbn1eu1jlzEX9QzhUYYwzEyY5AD68NcEFiu51ndxJdVg0CCYIwPLqBHwlbQtwsrXHaXVmZdoUCPDIUOctjaAT6fdarsbZ9uXbdILtf2fehmyekn4TzU7gwBWhZII49pYc4Ozrjz6/lWRNTq9Oyvav6mzcCq0228LBIbBRgf9PpURC7URmMCJIKiCMKQPIRHlGYU1jkISD4YLbvEIUmIKxBUj5Y/lQeh0Xe7vTpFLf0lduWyRA1aLqR1gbm4x9enKvTdnftF40TtXQhEJ2+PpJgHlJtXDkfBvlWthEuBsIQDi4TPMc1848vwGbKyrua4sgmAUBLqOWV3Afr6h9AaHX6DtKwmp0WoS9Zb3k5qfJ1OQfiK5VfP+j7U1ug1KanRai7p7qwA9obAwXpcTKkehBrZvd7vvo+0tml7R8PTavgVL07dPqGOAM+yx8pj16UHs6UpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQK8t3n70J2Qn7rpCj9ouBuZl8RNIrCQ9xZALHG1dw5g5kB+X3l7etdiaMFXX9+1O5NGjAsARG64yjovlzJ5A1qNtRcv3nuu73NTf3+M7bbm9tQ28kLchNzdBgN5KwoK3b76q7qbuouPfu3HZ7rvc45ciJJEg4I5RzBC4NFdrbbtgtqcrcG1CvhKBKkyQRIAJOJAMqZqitDFSQpO7hUNvgkACW9JieYJU5iZ2oNt0XHDNtZIALwFO0qlwQQRuKyciVIlMg3MH2qihk/q5m2ysrACS0gEHC9ATB4XzXddLbfE4lFtStp9wBaVwtwATzCr0yhmREkBBuJ5u0BG8VHnmWYjcQQecSR0Hh4xklcg254QABvAYQm1rmB5ScyIbmDtCxH2UOqqqi0rMVV5Zl2ktmYAX5j1t1QuH23EhntON4LQRJJHA0jJIkx7RHRzQgi3vPCIHEJDnafdO48ZYEGfeHMb4Iuq7rbOg2gAL4JeWKHacmIAbo3st52qCE4l4igVXBKsothWC7IVnMqonEifnazj8JWL7iFyPtLpKIFhmJIWeUH3T733BN8EsiNeQl2uJ4zW3iCxzb+8CCOZ94e9VE8MbWa4VCliwVCwEEFAu7JnPPnA+/QMCSqyfaBUgEqT7RRsz8/T3OKoN0kOMk8RHUSJzPPl5n8c1YMWCna0N5FcqpBAjOIz8D96pZWuB+XBEvcbiY7oJAJz+vLAHMsQS25WMBgBPSDgn4fH638QTKbTKwRGdwIHlHL06/TBI29DkgYI4cGZ5VZcMkbi3LcCTHUcvKg2F3S74vYNnszta4zafht6bU3JLWMgBLzk5TyPTrj2NmV85rdXc0nYVBnmJPkIP6/LZvcjvK14WuxtfdBcKf6OuOcsqiTp2JPMDKegj3ch7+lKUClKUClKUClKUClKUClKUClKUCqXbtqxavXrzBLVlHu3GM8KINxOM1evGd/O1G02htdnWSPG1pVrvXZZDACQSBxHkOu2MTNB4Xtfte72xr9TrbhIS4FTTWthcLZG420YLMiCWI5EkwVdYrrFCszkDxA4fcHYMYcEmCDBmATkEgSIZYNmuxbdUa4AzFee6FcAhTdWCZ2k/DPtId02jv3lLpWXe0/2hRcndu3LyPKSBAMOMEwEOMXCzM4LODuAKglFdgYMkAFS+MgBx7JFS4tne8FjctsrNdwwcwjSQDBnbuzzhwMkUAa3dRVHiu5UoLZG8w5K7sYMnAHJpXK3R4pVLsguBzbXbsADENCFFZFIMwAdozIDLnaGQMbF28NSwWIXZuCBCwOySCFGZ25w3WLkUBeVFrw0bdzKyu65bJVgoH8RAAmNylcVANpwvCsEBUDXWgqZUcbCCCCASeaw0ubZAHwitv8ArGLuXa2olwCxthJUHikbhz4h7ID8QWUni2AfZqFtkMiANbCjw0KbW5YwRzRoJUzjG+2DJcKC3iKXkyw8QHwwnOZJlBycdarhYe2RxHw2ZmBR1UYKwSYycbmgNG2VhYuBbe9eNGl94DGNobC8Rw3KcrleXFQTcJUSTZwCAFJKhRELyK8wAJbmq4G7OII6ggBSuNntFDuMDbG4EDEGR7tWJ2k5B3shDDeibBgMksrZOF+0PuGsTGSWMGQg3QFUbjzG4L5wOL3h5UEgoC42q4BKkl04WIk3AUImeg/hrCWyvNQvRk2kxiAZj0+vnjIzrt/rDONm3xGG0gnhBDL6/QdKop4ChG4DBAZNuREQySfr0NAkECWOxmEBWVswDIEfr87OwlTzWQ8jb/CJUYn0/wAqxgniUOYbntYjH9kUlYgTkwA0AAmcxQZVCkgGCzQAxIx6bgAP16cGazeuWriXbTMl6y6XLTLzS6pBDT5yJFcZZJA6GBA6HkJ/X+dwWWZO3aVIB5iM4JE/r6Bvfu72wnbfZen1eBfX7DWIOS6hANxA8mwy+hruK1F3B7VuaLtf9yvP9h2kq2QJwmoUF7Z5x5r8x8tu0ClKUClKUClKUClKUClKUClKUCtN97ta/aPbXaAR1Nqww0lsAHNuy3huW6QWJx1mJh5Tb+ourYsai+07bFm5eaBJhFLGBWhrhFw6h7oA3eKdzLuNxgWbABiTJmfvepKhRn8JriblCwrcDruEAuYIAaeR5g4nmpBqDw3AGIUbCwW3HFubkgkczmZiSvK4Ki5c5xGNzblzuIUMxlsgDnMdJiVYGxKgiEA3hhuKuCx9knYWjowg+q9FgCDjtK6oyqu4+IS1t7eyRvAJY4jlMgxErFxKnxHCIwgyslANzAe3LGZ2k4OdrcUk2oFzezAm0rC2SCxAAYgAks3PqZnmd/VzVTvfwgd0HeXO1FZUYtOwwBEbhkCACpgbUYEI9xsF1FsbiBtGTBgBivORG6J3IS2FqWjbtZgVKKpDBRZOxQqKrFZj2QAVn2WCcM1jlHFrYzb3utDm6QVOMA4O7CmTn2W4BMy90qFlkXgTxAbSE+FLNgYHnI3BfaEvQTcllvNuUiNrOQIVp8TaQ3CCMnbJ5MAo3QaqVBXw0abcKqAL9mGESC4kYiDCe6filxc067CCgVlVVK3LKkLtmQrxyI9gEhTndmhnaMAq5OwW5DMqwo2KVjMqQRbiCOLgwEEWZ4QoBKlbqPttMCcSWIiSYk3Wwy/dxEvbyGhh7UAKSzmZk7DJ88+0PuzUs67UZtgM/aNhwQAZLkGQJOAbvvHHBFY2JVQnsYZoHAHZhuiTtEn1J5+lAKZ3lbuIVWC7V5TAlRjIPteXzwj2SJCmQANywCYwGDx0/OpMDbzDQHlpRWQcQIwrf83UVBJbeYG0SSokttIIMA7lxj6/QI3NtjcwUwQBuO6PKTH4UBE52wxGQZj4AeVV3CWIkEkQI4h5D2KAkbmAJHIk7sT8YFBkkn0AgSDy5+tW3jILEHAmenPrJrCs/aHJEAEbhiPMCsgMkKQoMiSBkDzyc0HKs3X09y3etELdstbu2mE4ZGDLxHnB5/GvoPRapNbo9Fq7fsarT2dQsZgXEDxXzspggZgMSJABjOf8M1uzuNda73Z7J3EnwjqrCkzlbd+4ogn6fKg9LSlKBSlKBSlKBSlKBSlKBSlKDqO8tx7XYPbjpG79yupnycbD5dDWkbjAsuxQYILkbSo5lSAT0GTj4yMNunvYCe7vbkR/5YHi5YuIa0ncVgWtjYWhDObclobm0R9enzAXKi5cgsAssFK2iWmJQEDi6A4HTqV4wdgQQiMytJkcRwFiZkcoEZxjIUtQ3Gck7ghIO4Wl272EQWI+R6emY2wjDfalCZXjZLakEHgkBuYzzxMwCOHwwur2QUgCDhIZGLbnBiSCmMRiMgwVcCqhntKE8NNyyrQOJXSBB2ktiPUg8uNGdSXJ2kJtdluOzBfERmbliJ5Nj+PoLg8LGpBUC3cIYBmWChLAwYWBiY5z64VGLhdzPiDIVU3uX2ANaDQVOCkBjjpJI4yRUHxWJkEHcByIY3g1scBO5tx4YMFvZPAGMRvAcAYcELn2mYyokjMQDECYBjaLYLVaFKjg2oPZuKjLdRCw92E2TJI3BfaEuYkMhBPicaGeJQrqqBlO2SMmT6BiBEsPDgYw8ptuFSCtwHfCLc90qAZWcnHGfa+5Qi6vjFrcOAHcMcCYdeG6BykwDAMmFIcVRmYSGCx4YJ3GSq89p3kHHqVB+7xwQstw72ZmuMUFy22HJXO95gkiJM5Ue15VhNxxuZV4Xc8TYBwC0upEk9Zc8/Sm7cEUlQCZWZhQx5KqoTHMmLYnOeLMDI3gjBAC7mLHpLsTtnMf1vU4xgKeyNxYGQDHEIHMSSEPrhiOVVI49hIAUw5YFo4YJUgMPxqSZHiADBJ9khVJJAgiCZ8tx6VU9SVUkx7UdPVh9eKgiQWlSvMT7MYHKMVUbZHFIAMA7OZPQ5qWIgdOnATHn94ipCnYzExjM780Eqyyd2ZnnkfVo/Krwu6AecH4dMVhnoAB1MmD85msnPMYAHPHpzoM8iCSCBjDTAHUmY9a3V3CDr3b0SOCGW/qywPMG5cN2PxrTWj051Oqs2DlB9pfYbSFtKRIMdW5fM+Vbt7nj/c4bo+s1jDyjftx9KD0NKUoFKUoFKUoFKUoFKUoFKUoOu7csHU9j9tWB7VzQaoL/ELZYfiK0KGlkMKVZmYQWBBAMERPKvopgCCCAQcEHkQcGvnztHSXND2h2hobhO3S6m9YcqZlFeFO36ER5/QOMik4IAXBK7WyI5cP4/oNKuzeyNpJVHYQdysIIaTEfqfvUV9jbmAi2CyYjPIlpHT1/wBTScsvGxUrJcEgZnh88Tn/ABAXBQuxbDuzYcllYmQQQOuT9T98kQVYlpubTtZjLoogAdWO2MA/KTKrD0ckyWBkyw2nEeUQD5x9PLYJKlBJUTuB8SZZR7UxA5Bjg5AMYRSF9zCVtlvYVXn319otL5gR1IPDLEbdrI90DIPCGGDcKiCdwLjlAlScCAoWWx7rZMQFGbhHIsVMwpEkRzjOejNFQ3gKsMWBm6IcbUjCswDMcg88xjiLFdpCxIO0g8S79sEqFglWwpbl1g9MvwwaKVUWxtBBG0IN4G1iQGXZjPPhj+I7aMQrEFW2AqIaeZgqGDr9JB5YUATVAGIHCftJaE3MWdcxOZPT3jy9mTAIBDOAAjFiAqcJIgSAJ/JuYzUFnK8LFSq7ZM8UgjbuJPr7464zVW2DdEktjlk9eeQeZ+91wOlTt4p3b1HOVhenx/Ef4g3FDyYNyUhivwPBEx8Ty+uNiuVDHn884ySFPrTfliOc7juOT5T1PXoajcMzu24JVSB8MgR/y0EOZiSIgRz/AO4c/PNNwJgfkpHoCIqogDM85IEHPIcqA5MEdMZz196gvIgfyOPPpWRC8qqruZjtUL7RJxAk1jG8soGWJhQCCfkB+Ndlo7Qt5J3Oevur6L/M/wAsUHbdmacaa0QSDduENeYcpHJV9B/n1rb/AHYt+H2F2XIg3Ldy+en9bca4PwIrUlgO8Igl3K20A5l3IVfxNbu0thdNptLpl9nT2LVkdMW0CfyoM1KUoFKUoFKUoFKUoFKUoFKUoFak/aL2Y+m7Ws9o2wRZ7Rs8TACE1NlVtty812ET61tuur7d7H0vbnZup0F/hLxc093rY1CA7Lg/I+YJHWg0GxIuSQFLhXmCQud0qCajepG0gEqZBaZEgiDmOlZNVpNRoNVqNJqkNq/ZvPbuAglRtaCwjmPKsDQ0QCNpJWQBuBzyA+lBM7hEIC4WTBhYED1/XpU7tg2Nb4jk8QZQZJkgTkZn+cANTdgHcAwg4Bn0yOtRO0jmIyRBBOeQjI/y9BQWThECCCV2jzMlZJUz0MZ6wDzYV3MRtVoCgBtimc8KgECZ8oHwHvUnoBbGZzt2mOE8RxH4QPIcUSVKhl3GCWLHxJB4c7hy85+cngAHAALgCDIkGW3HIUwYA6eWObxmJBJG2cbDIYEEc+k49R/ZE4s0qxEw8EbkYwJO2SQT8Dn0nG0YmmXUZhMEGJAkmBE+XTpyHOgszKQu6CepYyWgQQSJ5YA5x6RWLcq4AGQOU5M8t0z+PyqSRAkcPUSY3Hl5/n86oxyQXEMciSSSRP6mgMAVBBWJgDcDGeuI/KqEgxIMz5HEfyqx8OIk+WesVCpccExAkDe0hR8Cf5UFQBJYKYzFZAjvDSAmYZuWMHaOZP6mpCW1/wCM+bABP7vX5/SrgkkEkk+tBltKqYSYMSSZZvia59muFbHKufZHLl6k8qD1ndHQnW9s6KRNrRzrr3l9ni2D8WIPyNbary3crsttD2X+93k26ntIpfIYcSacCLKGfMEsf4vSvU0ClKUClKUClKUClKUClKUClKUClKqWAoPD9+u79vVWv6Ut2wxtgLrAPa2+yt5SM45N6R5Vqu/o7qHhO9QThjDgHnB5V9DXLtsqyuFZWBVlYAqykQQQehrVfebsIdn32v6YFtDfc+GeZsOc+E5/6T15cxmq0tadKxqm1orzmXg2DcRYurCZJBEjzEVG9pVwBCzJk5JOSSTP+nnXYXUZZ3Ar6NIn61xWVM8K/IR+VTMTE6SqOezjiVyCQRA4R15Dl6x+ogGABzP96Mjb0+OP8D9pYqnVR9W/xqJ2yB19W+HnQVAElwFYKOTbiORE8JBn/T/hrHwkHik/TzIP+H6FZD/CvWJExPxqNz5yfljPnigRcYAHAHNmkR15nEmqBF6tAA9lBM/GcfnUkE0oJlV9lY9W4j+OPwqCSckkn1qKmgVkUVQdKy2xubaMt5DJ+gzQZ7SzFet7pdhN21r1F1P936Mpd1rZi4faTTj1bm3p/EK6jsnsXtHtLU29NZTwyQHu3L4hbFqYNx19r4DE/lubsjSaDsrRWNDo1i1aEsxjfeuNlrtwj3m6/TkKu1LV9aNExaJ2l2oAAAAgDAAwAPIVNUDqasKhSaUpQKUpQKUpQKUpQKUpQKUpQQ0xXHctBrknNUZJFB1d0vmuv1KC7bu2riJcS4pR0uDcjqehBrvXsT0ri3NJ5A1px5Ih43rMtXdq9larRMz6e293T5JQSz2/SOo+U10Jv9msSL2mXcMHaoVgfXaVNbluaIkEFQR6gV1Wr7vdmaufH0ltz5wJ+RrbHFZ9NJtFo/NET5wyTgxb6TXwnRrIW+7Vw8b6i1/C17+YcVmXsvupd9ntq5bPlca1/wB9oV62/wBxexrhJtnUWT/wOdo+RMV1t39nqknwu0bq+QdAY/CvO2Sbb4q/Dl/LPfBPs57V+U+cOtXu73feNneOx/a/dZ/6xV/9mOyeneDSEeo0/wDK/WV/2e9o/wDp9pWD/HbYflWBv2edunl2hoT8Veo5e6+ssduHz/i5/TVP+y/ZX/yHRj+zp/536q3drsFRNzvJpQB906Qf/qar/wCHPeA/+4aH+61WX9m3ax/rO09MPPYh/nXOXu/NyMGbrxn7auLc7G7n2s3O8m4jpabT/wDbbauK9nuTanbrdXqCPJrsH+5aT867xP2atg3u03Pn4YA/NTXPsfs67Itwbt7UXT6s4B/ukVdZmu2KPjr/AG1UwT7XE2n5R5Q8gdT3dtkeDoyx6NeBM/8A2u35V2nZ9jX64qNPZGm05w1wLtAHkqqFk17bR90exdIQbWkQNjiKqW+pBP413dns23bjbaUeR5mr9Kz19XSvhER/v1a64MXXW3jMy67snR2tFpxZs2toJ3u5zcuvEF7jcya7q1vEVkTSERg1yrenA6Vlvl13nWWqmPTbkWy0CuUk9aqtuOlZAIrK900pSgUpSgUpSgUpSgUpSgUpSgUpSgVEDyqaUFSinpVTZtnp+FZKU1GA6a0egqp0lo9K5NKrtTCZrEuIdFaPSo/cbVcyld7y0dUTipPRwv3C1U/uNquZSu95f7XO4x/dcUaK15CrDS2h0FcilT25nquKVjaGIWLY6VYW0HSr0qVoCgchSBU0oFKUoFKUoFKUoFKUoFRSlBNKUoFRSlBNKUoFKUoIqaUoFKUoIpSlApSlBNKUoFRSlBNKUoFKUoIqaUoFKUoIqaUoP//Z"
                        rating={5}
                    />
                    <Product
                        id="3254354345"
                        title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 256GB) - Space Grey (3rd Generation)"
                        price={749.99}
                        image="https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="9820159007"
                        title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X80AJ (Black) (2021 Model) | with Alexa Compatibility"
                        price={2499.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home;