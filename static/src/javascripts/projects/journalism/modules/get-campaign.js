// @flow
import config from 'lib/config';

export const getCampaign = () => {
    // eslint-disable-next-line
    const isCallout = campaign => campaign.fields._type === 'callout';
    const allCampaigns = config.get('page.campaigns');

    // targeting should become better once the campaigns tool works
    const allCallouts = allCampaigns.filter(isCallout);
    const campaignToShow = allCallouts.shift();

    if (campaignToShow !== undefined) {
        const fields = campaignToShow.fields;
        return {
            title: fields.callout,
            description: fields.description,
            formFields: fields.formFields,
            formId: fields.formId,
        };
    }
};
