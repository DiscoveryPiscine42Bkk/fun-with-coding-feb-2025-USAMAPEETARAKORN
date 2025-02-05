if ($args.Count -eq 0) {
    Write-Output "No arguments supplied"
} else {
    foreach ($arg in $args) {
        $folderName = "ex$arg"
        if (-Not (Test-Path $folderName)) {
            New-Item -ItemType Directory -Name $folderName | Out-Null
            Write-Output "Created folder: $folderName"
        } else {
            Write-Output "Folder already exists: $folderName"
        }
    }
}
