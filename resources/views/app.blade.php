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
    <link rel="icon" type="image/x-icon" href="{{ $faviconUrl }}">
    </script>

    <title inertia>{{ config('app.name', 'AB Infotech Ltd') }}</title>

    <!-- Global Meta Title, Description, keywords -->
        <title inertia>{{ $globalSettings->seo_meta_title ?? config('app.name', 'Laravel') }}</title>
        @if(!empty($globalSettings->seo_meta_description))
            <meta name="description" content="{{ $globalSettings->seo_meta_description }}">
        @endif

        @if(!empty($globalSettings->seo_meta_keywords))
            <meta name="keywords" content="{{ $globalSettings->seo_meta_keywords }}">
        @endif

    <!-- Search Engine Vesibality (Robots Meta) -->
        <meta name="robots" content="{{ $globalSettings->robots_meta ?? 'index, follow' }}">

    <!-- Google search console verification code -->
        @if(!empty($globalSettings->google_verification_code))
            <meta name="google-site-verification" content="{{ $globalSettings->google_verification_code }}">
        @endif

        <!-- 🎯 ৪. Google analitic tracking code (GA4) -->
        @if(!empty($globalSettings->google_analytics_id))
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id={{ $globalSettings->google_analytics_id }}"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '{{ $globalSettings->google_analytics_id }}');
            </script>
        @endif


    <!-- ========================================== -->
    <!-- SOCIAL SEO (OPEN GRAPH & TWITTER CARDS) -->
    <!-- ========================================== -->

    <!-- Common Open Graph / Facebook / WhatsApp -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        
        @if(!empty($globalSettings->og_title))
            <meta property="og:title" content="{{ $globalSettings->og_title }}">
            <meta name="twitter:title" content="{{ $globalSettings->og_title }}">
        @endif

        @if(!empty($globalSettings->og_description))
            <meta property="og:description" content="{{ $globalSettings->og_description }}">
            <meta name="twitter:description" content="{{ $globalSettings->og_description }}">
        @endif

        @if(!empty($globalSettings->og_image_path))
            <meta property="og:image" content="{{ asset('storage/' . $globalSettings->og_image_path) }}">
            <meta name="twitter:image" content="{{ asset('storage/' . $globalSettings->og_image_path) }}">
          
            <meta property="og:image:width" content="1200">
            <meta property="og:image:height" content="630">
        @endif

        <!-- Facebook Specific -->
        @if(!empty($globalSettings->fb_app_id))
            <meta property="fb:app_id" content="{{ $globalSettings->fb_app_id }}">
        @endif

        <!-- Twitter / X Specific -->
        <meta name="twitter:card" content="{{ $globalSettings->twitter_card_type ?? 'summary_large_image' }}">

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
    

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

    {{-- Google Font --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700&display=swap"
        rel="stylesheet">
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>