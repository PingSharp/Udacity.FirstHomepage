$css1 = Get-Content .\css\Responsive.css;

$file = New-Item -ItemType File -Path '.\css\Responsive.css.new';

for ($idx = 0; $idx -lt $css1.Length; $idx++ )
{
    $line = $css1[$idx];

    if ($line.Contains('}') -and ( [string]::IsNullOrWhiteSpace( $css1[$idx+1] ) ) )
    {
        # valid
        Add-Content -Path $file $line;
    }
    elseif ($line.Contains('}'))
    {
        Add-Content -Path $file	 $line;
        Add-Content -Path $file	 '';
    }
    else
    {
        Add-Content -Path $file	 $line;
    }

}