if ($args.Count -eq 0) {
    Write-Output "No arguments supplied"
} else {
    $count = [Math]::Min(3, $args.Count)
    for ($i = 0; $i -lt $count; $i++) {
        Write-Output $args[$i]
    }
}
