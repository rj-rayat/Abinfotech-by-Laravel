<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @php
            $globalSettings = \App\Models\SiteSetting::first();
            $faviconUrl = ($globalSettings && $globalSettings->favicon_path) 
                ? asset('storage/' . $globalSettings->favicon_path) 
                : asset('default-favicon.ico'); 
    @endphp
    <link rel="icon" type="image/x-icon" href="{{ $faviconUrl }}"></script>
    <title inertia>{{ config('app.name', 'AB Infotech Ltd') }}</title>

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead


    <script>
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
                '(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    </script>
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

    {{-- Google Font --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
