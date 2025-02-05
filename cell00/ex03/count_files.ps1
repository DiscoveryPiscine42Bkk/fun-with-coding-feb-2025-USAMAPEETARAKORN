$count = (Get-ChildItem -File -Recurse).Count + (Get-ChildItem -Directory -Recurse).Count
Write-Output "$count`$"

