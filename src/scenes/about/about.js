import React, { Component } from 'react';
import Layout from '../../shared';
import { Grid } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Layout>
          <Grid>
            <h2>About Us</h2>
            <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, orci ac gravida varius,
              ligula enim sollicitudin mauris, quis scelerisque justo arcu id orci. Donec accumsan odio sed laoreet
              vestibulum. In hac habitasse platea dictumst. Quisque hendrerit ligula ligula, id euismod justo tincidunt iaculis.
              Integer eget urna congue, convallis velit eu, porttitor lacus. Vestibulum eu turpis vehicula, tempus nibh nec, pharetra
              neque. Vestibulum malesuada vestibulum sollicitudin. Duis quis aliquet metus.
            </p>
            <p>
              Nam id turpis suscipit, cursus sem nec, mattis erat. Vestibulum eget dolor sed nunc tempor tincidunt.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer elementum dolor orci, eget facilisis ipsum tempus id.
              Nam aliquam augue id dui pulvinar suscipit. Vestibulum non hendrerit libero. Sed sem leo, commodo id neque at, facilisis
              iaculis dui. In malesuada purus lectus, a lacinia risus euismod ac. Proin venenatis libero urna, vel tristique ligula tempor
              rutrum. In ut condimentum nisi. Suspendisse in risus nec massa rhoncus sagittis non nec mi. Pellentesque tincidunt sed enim
              eu viverra. Donec tincidunt, nibh non aliquam cursus, enim ligula vestibulum nisl, vel finibus ligula dolor quis lorem.
              Nam gravida magna sit amet mi accumsan, eu pellentesque tortor rutrum. Donec commodo odio id hendrerit euismod. Mauris
              dapibus at dui at lobortis.
            </p>
            <p>
              Nulla commodo metus eu lectus tincidunt molestie. In non facilisis nulla. Mauris nulla lorem, hendrerit non erat nec,
              hendrerit pellentesque dui. Integer pharetra ornare porttitor. Ut egestas lorem et massa eleifend laoreet. Mauris ornare
              cursus erat, sit amet pretium ex tempor nec. Ut laoreet turpis mauris, ut consectetur felis elementum eu. Mauris scelerisque
              viverra turpis, nec ornare lorem pharetra a. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Sed aliquet varius arcu. Etiam efficitur nunc sed eros pretium hendrerit. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Mauris facilisis lobortis magna eget pulvinar.
            </p>
            </section>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default About;
