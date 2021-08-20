var title = 'Angaryos Dokümanlar';
var layout = 'wide';
var target = '#angaryos';
var gitHubText = 'GitHub';

var editLinkBase = 'https://github.com/mikroGovernment';
var githubLinkBase = 'https://github.com/mikroGovernment/angaryos-stack';



var SponsorIcon = {
    template: `<svg style="color:#ea4aaa;" fill="currentColor" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"></path></svg>`
}

var footer = `
<div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
&copy; ${new Date().getFullYear()} <a href="https://omersavas.com" target="_blank">Ömer SAVAŞ</a> tarafından geliştirilmiştir. MIT lisans sahiptir.
</div>
`;

var banner = {
    template: `
      <div class="docute-banner">
        <note :label="false"
          ><SponsorIcon width="16" height="16" style="position:relative;top:2px;margin-right:8px;" />Projeyi fonlayarak <a href="https://github.com/omersavas26" target="_blank"
            >GitHub<ExternalLinkIcon /></a
          > Angaryos 'a destek verebilirsiniz.</note
        >
      </div>
    `,
    components: {
        SponsorIcon
    }
}