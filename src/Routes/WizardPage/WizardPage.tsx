import React, { useEffect } from 'react';
import { ExternalLinkAltIcon } from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

import { Button, Page, PageSection, PageSectionTypes, PageSectionVariants, Wizard } from '@patternfly/react-core';

import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';

import './WizardPage.scss';
import { useNavigate } from 'react-router-dom';
import { Domain } from '../../Components/DomainList/DomainList';

const Page1 = React.lazy(() => import('./Components/Page1/Page1'));
const Page2 = React.lazy(() => import('./Components/Page2/Page2'));
const Page3 = React.lazy(() => import('./Components/Page3/Page3'));
const Page4 = React.lazy(() => import('./Components/Page4/Page4'));

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 *
 * https://www.patternfly.org/v4/layouts/bullseye/
 *
 */
const WizardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    insights?.chrome?.appAction?.('default-page');
  }, []);

  const onLearnAboutClick = () => {
    // FIXME Update the URL with the location for docs
    window.open('https://access.redhat.com/articles/1586893', '_blank');
  };

  // Event when Close button is clicked
  const onCloseClick = () => {
    // TODO Not implemented
    //      What happens on Cancel? (see documentation)
    navigate('/domains');
  };

  // TODO This will be loaded or initialized
  const domainData: Domain = {
    domain_id: 'e68587bc-e8eb-4c88-932a-c8bcd4b816fb',
    domain_name: 'mydomain.example',
    auto_enrollment_enabled: false,
    title: 'Human readable title',
    description: 'My human friendly description',
    domain_type: 'rhel-idm',
    rhel_idm: {
      ca_certs: [
        {
          issuer: 'CN=Certificate Authority, O=MYDOMAIN.EXAMPLE',
          nickname: 'MYDOMAIN.EXAMPLE IPA CA',
          not_after: new Date('2023-01-31T13:23:36Z'),
          not_before: new Date('2023-01-31T13:23:36Z'),
          pem: '-----BEGIN CERTIFICATE-----\nMIIElzCCAv+gAwIBAgIBATANBgkqhkiG9w0BAQsFADA6MRgwFgYDVQQKDA9ITVNJ\nRE0tREVWLlRFU1QxHjAcBgNVBAMMFUNlcnRpZmljYXRlIEF1dGhvcml0eTAeFw0y\nMzA2MTIwNjEyMThaFw00MzA2MTIwNjEyMThaMDoxGDAWBgNVBAoMD0hNU0lETS1E\nRVYuVEVTVDEeMBwGA1UEAwwVQ2VydGlmaWNhdGUgQXV0aG9yaXR5MIIBojANBgkq\nhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEA/F+63FGVUElkycJ2I5/rOIQ8331bfqp+\nraVuft2wezXj9O60X4DsEXltjMM+Lb3vPpInI6Fjdr74RWiz7YeWRYT8y4AgiZ7O\nrbe1ivvmutZwdA3S3KVoQhfqLUzYKksL7IpLQFuXsOm85GMQsw2SNz0NIlM3Ixjv\nKFyARcFSLzBAlIUHdZwq2e8PKvIcLGjHRGczfBqSviCBKxTTO3S2vRRHFEw8lsmJ\nyqIb8gLLOSRi4GqZfp6RRnr88z7z/xqZc7ffDko3ngjUn1Cynm715Xqftlj3o297\naVQ/Oxgw/ODiQSZl+HnOgrrH4XbM+hVUfxBXydVgPrN8mTrTcY0X03cLqMWCFO6E\n8XAJFkY+1SLOdruHTfdhbmRcp/vvyZ3rcSP9qk75jFPr3iKU5vnbAtbZfGtzk6te\nsG/Y8tRjdLvcKKM9PBa93VA56nN0+RLtOn24/UfiYjYsYQeq1wJnfJUlcrER9X6t\nbX1umBXcwT9FeofJENCZqP3YfU0EH76nAgMBAAGjgacwgaQwHwYDVR0jBBgwFoAU\ntQw3tdMW/Sz+VLsOZaefg4Vnrm0wDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8E\nBAMCAcYwHQYDVR0OBBYEFLUMN7XTFv0s/lS7DmWnn4OFZ65tMEEGCCsGAQUFBwEB\nBDUwMzAxBggrBgEFBQcwAYYlaHR0cDovL2lwYS1jYS5obXNpZG0tZGV2LnRlc3Qv\nY2Evb2NzcDANBgkqhkiG9w0BAQsFAAOCAYEA6JDiMHd8aWSlyIQ8tg/mEH7mIvSz\niXWfygMcyXP5sGRvrE0yo2lbNfr8y3KnOGkNYMqrKJ28VBXAPjx5zLrooHynLYua\nLEsHw6XzvQWiWvcstSkKhcVOGdDqTMhl2XEGvx+LHZYBWKlb7i+L/0fDl0EUestS\ne4Shh63DLJ+7RaMFqoI/CHO/Jer5R4+dIMR8KSTTBhjEGLwN6rsRNI7D7vsyqDV8\ntZmhMHNEo9jtrPR8+tAzp6BaumioukI75nkAXrKiB0GRXI/jRp94VqEZstWcQPqc\nxzRRyR2Htet4AVbUWnSq2TRWIyeIecgPVmHXgDPpFWrwi/hpysXqT9sN/QOsCa3a\n2IpyGeuieProOeXb5lG4pbwePz5dRRlY3WRvhWdQm+dRGRErJt42KC7JAfiYoSmV\nDfJjQL2S11oYZt048ZQFIsUpiSJTmsCLXURIEuccrKT+WXR7D+WNkYm8aJ/4s8Ub\n+B8Vv5GjCTO5LrjgVWGZtxOttN/uJ1ecgZpW\n-----END CERTIFICATE-----\n',
          serial_number: '1',
          subject: 'CN=My Domain, O=MYDOMAIN.EXAMPLE',
        },
      ],
      realm_domains: ['mydomain.example'],
      realm_name: 'MYDOMAIN.EXAMPLE',
      servers: [
        {
          ca_server: true,
          fqdn: 'ipaserver.mydomain.example',
          hcc_enrollment_server: true,
          hcc_update_server: true,
          location: 'europe',
          pkinit_server: true,
          subscription_manager_id: '6f324116-b3d2-11ed-8a37-482ae3863d30',
        },
        {
          ca_server: false,
          fqdn: 'server2.mydomain.example',
          hcc_enrollment_server: false,
          hcc_update_server: false,
          pkinit_server: false,
          subscription_manager_id: '6f324116-b3d2-11ed-8a37-482ae3863d30',
        },
      ],
    },
  };

  const pageNotImplemented = (
    <React.Fragment>
      <p>Not implemented</p>
    </React.Fragment>
  );

  const steps = [
    {
      name: 'Prerequisites',
      component: <Page1 />,
    },
    {
      name: 'Basic information',
      component: <Page2 />,
    },
    {
      name: 'Registration',
      component: <Page3 />,
    },
    {
      name: 'Review',
      component: <Page4 data={[domainData]} />,
    },
  ];

  const title = 'Add domain';

  return (
    <React.Fragment>
      <Page>
        <PageHeader>
          <PageHeaderTitle title={title} />
          <p>
            Add a domain to the registry.{' '}
            <Button variant="link" icon={<ExternalLinkAltIcon />} iconPosition="right" onClick={onLearnAboutClick}>
              Learn more about the domain registry.
            </Button>
          </p>
        </PageHeader>
        <PageSection type={PageSectionTypes.wizard} variant={PageSectionVariants.light}>
          <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} onClose={onCloseClick} />
        </PageSection>
      </Page>
    </React.Fragment>
  );
};

export default WizardPage;