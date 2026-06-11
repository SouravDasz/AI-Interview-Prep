from yt_dlp import YoutubeDL  # type: ignore
from ddgs import DDGS 

#youtube search 
def search_youtube(query: str, limit: int = 7):
    ydl_opts = {
        "quiet": True,
        "no_warnings": True,
        "skip_download": True,
    }

    results = []

    try:
        with YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(
                f"ytsearch{limit}:{query}",
                download=False
            )

            for video in info.get("entries", []):
                results.append({
                    "title": video.get("title"),
                    "link": f"https://www.youtube.com/watch?v={video.get('id')}",
                    "channel": video.get("uploader"),
                    "duration": video.get("duration"),
                })

    except Exception as e:
        print(f"Error: {e}")

    return results

#pdf search
def pdf_search(query:str):
    with DDGS() as ddgs:
        results = list(ddgs.text(f"{query}:pdf", max_results=7))
    resource=[]
    for r in results:
        resource.append({
            "title":r["title"],
            "link":r["href"]
        })
    return resource