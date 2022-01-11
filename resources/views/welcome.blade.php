<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix("css/app.css") }}">

        <script defer src="/js/manifest.js"></script>
        <script defer src="/js/vendor.js"></script>
        <script defer src="/js/app.js"></script>
    </head>
    <body>
        <main class="min-h-screen grid place-items-center text-center">

            <article class="">
                <h1 class="text-indigo-500 font-semibold text-4xl">Laravel + React + Tailwind + HeadlessUI</h1>
                <p class="mt-4 mb-8 font-semibold">Testing several modals.</p>
                {{-- React component --}}
                <div id="example" data-example="{{ json_encode($modals) }}"></div>
            </article>
        </main>
    </body>
</html>
