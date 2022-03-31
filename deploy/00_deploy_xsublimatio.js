module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy('XSublimatio', {
        from: deployer,
        args: ['https://google.com/', '0x7438049Cfe4aA9f4BD172960201771dcbB6fBDD4'],
    });
};

module.exports.tags = ['XSublimatio'];
