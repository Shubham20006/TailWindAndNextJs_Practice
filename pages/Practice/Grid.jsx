import React from 'react'

function Grid() {
    return (
        <div>
            <div class="grid text-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xl:grid-cols-4">
                <div className='grid  bg-red-500 m-1'> Grid A</div>
                <div className='grid  bg-blue-500 m-1'>Grid B</div>
                <div className='grid  bg-yellow-500 m-1'>Grid C</div>
                <div className='grid  bg-green-500 m-1'>Grid D</div>
                <div className='grid  bg-red-500 m-1'>Grid E</div>
            </div>
            <div class="min-[320px]:text-center max-[600px]:bg-sky-300 bg-pink-900 my-16">
                For Max and Min Width
            </div>

            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        {/* <img class="h-48 w-full object-cover md:h-full md:w-48" src="" alt="Modern building architecture"> */}
                        <img class="h-48 w-full object-cover md:h-full md:w-48" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHUAvAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADkQAAICAQIEBAMGBQMFAQAAAAECAAMRBCESMUFRBRMiYTJxkQYUI1KBoTNCkrHhU2LwJENyotEX/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAEDAgQFBv/EACERAAIDAAICAwEBAAAAAAAAAAABAgMREiExQQQTUSIU/9oADAMBAAIRAxEAPwD5Aa7axwtyl6l4CcjYjG8Ya+nUDLqiHuFIEWJKNlVyO2cyyLySi9T0NXVXkixsHpjqIRmTYNkH/dvF0fC8hty2O0N62QZAPY94NGoyWdHW0i2JxIVA7xVqnq5tt7R6lbVHFW/CR0nGcv8Axhk/+IEEmOUYtaumL0gL2IYbwtIqyPMyD2EoqE5Kjb2jOk0zWsdse5jZmCbaSQvqF4gD15Yi9KsLF236TQdnBCkAjmCYNkBw1eSR7QQThr0tqKvu4W1N1ZeIe8XXif1HnmGRbbm8rfhJzjtGXqGnYI24ODkHr2ga472vBVqxZUpJ9SnEVsAFflsNwTg5mtRXWdES49fHt3IiNtOX7g8z2iTKWV9Ji1O5x3g7lxkDoYYVlGwe8IVFgYgcpohx1YIDYwzrgDvKlcWAS1h9WJtEcwGRkGDI9IA5xhl4djKKMtv0gZZEXhGepkpq47l48DfMNY9fAFrG/U94LBWst32x3iHiTGNXaeEVDkq7frEggI3MZKlgWPxGDbT5Pxge2ZnwUlsnoIpw8jlZZVZDkYnUYYxDFgawkBJJl1qLJxchnlOoCu2PT2g0duW4EbqKtUT/ADA94mXhkvAUKqbnqOkEtaWFgQcnrOO5BxDoQvAw3OIvBZNN4cro8oEjcQiAupAAVQcwtV3EpRl2PXHKEqqZBsNj1mdLqpPM8ESugLxNy5H2MVGnZ7vwRs2xURoUcfEVyRjcQ+ltWsbKA4GN+o6w3Eb+tSaT6FFVK0fhXNg2BHeV0aC6/h1LegtuR0jn3Yq+APQTy7iLjSN5rAEcPURpilVKLTwu1fBqm41whbCgcgOkBrKgLB5fIc5q0Cu6sKf4ij64g+HzNSaiFA5kY5xJ9lJ1JxxezMtpWytH+EBccXfECg4QQRz5GaOooepHAbir4j6e0UUDygQvqzsJpM5p15IzLEIsZsQaKWbiPIGaGpGd8YHURmzR+T4WjEDisPHn2m+SS7OX/O5t567MiwcRJgiNo4lRawDBOT0EHqAq2Mq7jM0QlD2LLDY4sA8hufpItYAyx+UKtRK8KYPU+0GKKZxKsuqnbIwSYncMWGaGtdUYKg2Amcx4myZPtlbHGPRdUJ5Yl5QKRCBmxgjM3hNHa1yRnaNpSK8q/Fn2i6lCc/DGK2PAEJyBy9oNFYYgmp0lqoLApZORIG4MDS2Nx0MO2psV1ZwrDbkBv85yxaXAuQYJ5jsYs/Sr47sQy3KfUBg8iJo6JmCkWHK9DscZmHxWKeHIIMeq1aqoDDcdBMyr6Oij5CUv6GabDS1tZ9QPIDn+keeupk8zh4G4eTc5ltuRYN+xzyg7tVaGXLEjpmZcGy0fkxgny7RrUXFrGpuU8Bxg9JXTgV6y5X9IHJh/aX0WupekLftgEFvbtDanSEWLqUZRWwxld8j5SfaeM61/cFKL3CleiSzhtosyRz4Iprg1OoqtI4TjGxxgzQ+/1raKkapOoYLsP8wOrsAYV244s5WwrzHeOPJS7M3fW63x8g70sOlHG62EjK8P8omSwb+GucA7T1Y0rW1IpZHQr6XQYMy7fCXVbLK18wKf5ekSml0K747mk4mRqdM3lcW3qOOc0/EPxPC9GARnhAOIAkMQjL6RyGMGNVor6SusjHAxyTyxHN60Tpgkppe1hjXf9PS23rbkwPKJKvGeU2NfUnCCuCGGR7TO+BsCXUutPNtqannoq9ayikUNxKSWI/QSzPxEwZXfeJS0y48e0AtJZiYLhEYZfaD4DG2jncG2F8tu06Kz2muNJkSw0RPSL7EdP0MxxUe0ItZ95qfcjLDRGP7EP6JGZ5RPSdWo9prLoz2hF0J6CH2If+eRkCtscpPJPPE2hoW7QeqoXTUPdbsqjPzh9iB0SS1mWFYdTDOosAJ34RvMjV+Kvdtp1NSd+sSsusf4rHI7ZmXaR5pdI3atbRprATcmAe+cTTP2h0S6dqKrgVPqbIOCZ4wJxEYhBQd5KVmlK7bILIm1Zr9JYSwuUb8txCret6em4ORtkHO08+1RCynwtkHB7gzSuZJykj22l1jaaoEMXsHw88Cd0/imrqu4uM8JPqxzxPIVa3UV8PBaxA3CnfM9F4N4hT4lZ5BqFVuMjByD8oNxfo6qfkSk1FPD0tunp1y+dSVJPxBcD9op4hQmk0taEZNjdD9f3nKa7dM+aiQc9JocFWqUHUnGG2A6HvOeXKPjwe1XOuxNSWM83rhwBa9zgZY9ieky7hxvgGbvjFFaO9qlsHlgzLrquGLDX6TyLdZqM+jkvp/rF4KNQtNS8Ryx6QZqzuRgR9FJwSoZ4LUJYx35e20cZE7al+Ge+2wg8DvGxTWvqY5PaUbgzsJvTjlW0epWgDpLCpe0KHTuPrLKU/MJHWemuH6UFA7S60LLeYg/mX6y4tr/ADL9Ym2bXA4unHaMV6Ydpyu2r/UT+oRqqyk/92v+oSblIouBVdIvUTzX25sNOkq0dVblrz8Y+EY3wZ61raQu11f9Yglal2DM9ZxyJI2ijJp6YugrIOMXmnyfT6cOwWpFLqfUbWAXPbfEPphVairZWEXi2cY3O237dZ7PW/ZXQ36h7zrW/ELM6lw2Se3/AMgH+yNQ09nlayuyzhCoHUEjHyP98y32Jo8f/FavR55PDE4gQww3L3GwyD9Zr0eDhUJbHqrJBxxb9vaG0PgGv02rrrZK2OA2UbiHMfTf9J9Q+zfhvhv3S0eMKqWqSyYOxPcd5yW2vcR6NdUK6+U1p8a1/hS1LglRkA7nGNs8s84pqNHTpQfMANucohPMHlkfKfQftJ4NrL+MadFCGxuBev69v12mLp/sNqtQQdVqadOrDdUHG3yzy/vN1XJrsl8j4u44I8Vwm9nPDUDxDiUkAn2Emi1A0niFOppRyOLHArbnO2J9A/8Az3TMfxNdbxBOEcto9pPsV4T4bet6ZstG4Z3zj9OUq74HND4F3Jei1emJrDhSGIBPEN46vhtKUefqDnO+Mw/lVjPrH1g7Lq9OpHmD5ZkJWvOmezGtclq0zdXZQ/or02fmNplanTXWOcoQOS5m1d4hWRwh0A/WIvqqiSGcf1GQjOW6em+PHjmIzqvC3O7MUPUxivwbTHey0bd4fztKBkhT/wA95DrdKB8I+sr9svSOd1Q9sW1Gk0NS7HJmVa+nVyAv7zUu12mwcJX+uIg+tp4jvX9JSFkvw5Lqq34Z40Iv5R9JZVX8onJYGekfLJlgq/lX6S4RfyiUBlw0aNphFRPyiHStOw+kXV4VbI0bTGqq68/4j+nprON5m12xym09M/SJo6arUjWqoq6EmM1pWOUy01IyB1+X+Ja3xTTUJ+JcvF895GSZ6FfyIryei0Nigg5+snj+vNVvhIV8KdagYA8540/ag1t+BUW92OInr/H9Trnoe0Ivk2CxQO45TknXyfZSfz6uGJ9n1LUuLQCWySO0ydTUu+TPJL9stWqgGhGxt8RGY1X9rNNeuL0apu/MR11uJV/PokupGjdp6iTuYndp0AyCdvaUPiFN29Ngb5EGBtvyAf3OBOuMTjt+RH0LX1JnciKPUnYGHtt3OSPrFnsH/DLJI8+dmsG1ajkIJlXt+0uz+0GW33g0QcihUdAJQqPyiXLSpaZxGXJgyo/KJwgdpYmSPCbZwGdgTaBylTax5bTLkhDPEqjc4lW1CDuYpmSZc2AwdWw+FQPnOHV2/wC36QEkXJhrD/e7+j4/SWXXakHaz/1EWki1jTaGX1mpcENc2D+kB1zOZnREa07kzvEZWSIenSSZzeSczGJssrMvwuV+Uv8Aer1O1rj9YLM5ATkG+93nna0n3q7/AFDAyR6xawv3mzqc/MSw1TfzKD8oCSHJho0NQjcziWyDuOUTnVYryM0piGjK5ghaw953zR2muaAFJJJJASSSSAEkkkgBJJJIASdEkkBo7JJJA0VMkkkDBJJJIASSSSAEkkkgBJJJIASSSSAH/9k=" alt="" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid
